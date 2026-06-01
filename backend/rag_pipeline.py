import os
import json
from langchain_community.vectorstores import FAISS
from langchain_google_genai import GoogleGenerativeAIEmbeddings, ChatGoogleGenerativeAI
from langchain_core.prompts import ChatPromptTemplate
from langchain.chains import create_retrieval_chain
from langchain.chains.combine_documents import create_stuff_documents_chain

def load_data():
    base_dir = os.path.dirname(os.path.abspath(__file__))
    documents = []
    
    # Load Prakriti Foods
    with open(os.path.join(base_dir, "data", "prakriti_foods.json"), "r") as f:
        data = json.load(f)
        for item in data:
            doc = f"Dosha: {item['dosha']}\nFavorable Foods: {', '.join(item['favorable_foods'])}\nUnfavorable Foods: {', '.join(item['unfavorable_foods'])}\nProperties: {item['properties']}"
            documents.append({"text": doc, "source": "prakriti_foods"})
            
    # Load Seasonal Diets
    with open(os.path.join(base_dir, "data", "seasonal_diets.json"), "r") as f:
        data = json.load(f)
        for item in data:
            doc = f"Season: {item['season']}\nRecommendations: {item['recommendations']}"
            documents.append({"text": doc, "source": "seasonal_diets"})

    # Load Food Properties
    with open(os.path.join(base_dir, "data", "food_properties.json"), "r") as f:
        data = json.load(f)
        for item in data:
            props = item['properties']
            doc = f"Food: {item['food']}\nTaste: {props['taste']}\nEnergy: {props['energy']}\nPost-Digestive Effect: {props['post_digestive_effect']}\nDosha Impact: {props['dosha_impact']}\nBenefits: {props['benefits']}"
            documents.append({"text": doc, "source": "food_properties"})
            
    return documents

class AyurvedaRAG:
    def __init__(self, google_api_key: str):
        os.environ["GOOGLE_API_KEY"] = google_api_key
        self.embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001")
        self.llm = ChatGoogleGenerativeAI(model="gemini-1.5-pro", temperature=0.3)
        self.vector_store = None
        self.retriever = None
        self.chain = None
        
    def setup(self):
        docs = load_data()
        
        # Prepare text for vector store
        texts = [doc["text"] for doc in docs]
        metadatas = [{"source": doc["source"]} for doc in docs]
        
        # Create FAISS index
        self.vector_store = FAISS.from_texts(texts, self.embeddings, metadatas=metadatas)
        self.retriever = self.vector_store.as_retriever(search_kwargs={"k": 3})
        
        # Create Chain
        system_prompt = (
            "You are an expert Ayurvedic practitioner. Use the following context from curated Ayurvedic "
            "datasets to answer the user's question accurately. If the answer is not in the context, "
            "rely on your general Ayurvedic knowledge but prioritize the curated datasets.\n\n"
            "Context:\n{context}\n\n"
        )
        
        prompt = ChatPromptTemplate.from_messages([
            ("system", system_prompt),
            ("human", "{input}")
        ])
        
        question_answer_chain = create_stuff_documents_chain(self.llm, prompt)
        self.chain = create_retrieval_chain(self.retriever, question_answer_chain)
        
    def get_recommendation(self, query: str):
        if not self.chain:
            raise ValueError("RAG Pipeline not setup. Call setup() first.")
        response = self.chain.invoke({"input": query})
        return response["answer"]
