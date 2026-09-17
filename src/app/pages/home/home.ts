import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  isSpeaking = false;

  startGuidedBreathing() {
    // Prevent multiple narrations running together
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(
      'Welcome to your healing session. Take a slow deep breath in. Hold for four seconds. Gently breathe out. Allow your body and mind to relax.'
    );

    speech.rate = 0.8;
    speech.pitch = 0.9;
    speech.volume = 1;

    this.isSpeaking = true;

    speech.onend = () => {
      this.isSpeaking = false;
    };

    speech.onerror = () => {
      this.isSpeaking = false;
    };

    window.speechSynthesis.speak(speech);
  }

  stopNarration() {
    window.speechSynthesis.cancel();
    this.isSpeaking = false;
  }
}