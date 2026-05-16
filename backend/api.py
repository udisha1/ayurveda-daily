from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os
from rag_pipeline import AyurvedaRAG
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Ayurveda Recommendation API", description="RAG-based Ayurvedic recommendations")

# Initialize RAG Pipeline
google_api_key = os.getenv("GOOGLE_API_KEY", "")
rag_pipeline = None

if google_api_key:
    try:
        rag_pipeline = AyurvedaRAG(google_api_key=google_api_key)
        rag_pipeline.setup()
    except Exception as e:
        print(f"Failed to initialize RAG pipeline: {e}")

class QueryRequest(BaseModel):
    query: str

class QueryResponse(BaseModel):
    answer: str

@app.get("/")
def read_root():
    return {"message": "Welcome to the Ayurveda RAG API"}

@app.post("/recommend", response_model=QueryResponse)
def get_recommendation(request: QueryRequest):
    if not rag_pipeline:
        raise HTTPException(status_code=500, detail="RAG Pipeline is not initialized. Please set GOOGLE_API_KEY.")
    
    try:
        answer = rag_pipeline.get_recommendation(request.query)
        return {"answer": answer}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
