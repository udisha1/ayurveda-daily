import { Component, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './chatbot.html',
  styleUrl: './chatbot.css',
})
export class Chatbot {
  isOpen = false;
  loading = false;
  userInput = '';
  messages: { role: string; text: string }[] = [
    { role: 'bot', text: 'Namaste! Ask me anything about Ayurveda 🌿' },
  ];
  history: { role: string; content: string }[] = [];

  suggestions = [
    'What is Ashwagandha used for?',
    'Home remedies for cold?',
    'Benefits of turmeric?',
    'Foods for better digestion?',
  ];

  @ViewChild('scrollMe') private scrollContainer!: ElementRef;

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  private scrollToBottom() {
    setTimeout(() => {
      try {
        this.scrollContainer.nativeElement.scrollTop =
          this.scrollContainer.nativeElement.scrollHeight;
      } catch (e) {}
    }, 50);
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    setTimeout(() => this.scrollToBottom(), 100);
  }

  ask(question: string) {
    if (this.loading) return;
    this.userInput = question;
    this.send();
  }

  send() {
    const text = this.userInput.trim();
    if (!text || this.loading) return;

    this.messages = [...this.messages, { role: 'user', text }];
    this.history.push({ role: 'user', content: text });
    this.userInput = '';
    this.loading = true;
    this.cdr.detectChanges();
    this.scrollToBottom();

    const snapshot = this.history.map(m => ({ ...m }));

    this.http.post<any>('http://localhost:3000/chat', { messages: snapshot }).subscribe({
      next: (res) => {
        const reply = res.content[0].text;
        this.messages = [...this.messages, { role: 'bot', text: reply }];
        this.history.push({ role: 'assistant', content: reply });
        this.loading = false;
        this.cdr.detectChanges();
        this.scrollToBottom();
      },
      error: () => {
        this.messages = [...this.messages, { role: 'bot', text: 'Sorry, something went wrong!' }];
        this.history.pop();
        this.loading = false;
        this.cdr.detectChanges();
        this.scrollToBottom();
      },
    });
  }
}