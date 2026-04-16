import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
   imports: [CommonModule],
  styleUrls: ['./about.css']
})
export class AboutComponent {
  // Har FAQ mein ek 'isOpen' property add kar di hai
  faqs = [
    { 
      q: 'Is Ayurveda scientifically validated?', 
      a: 'Many Ayurvedic practices and herbs have been studied in modern clinical trials...',
      isOpen: false 
    },
    { 
      q: 'Can I practice Ayurveda alongside conventional medicine?', 
      a: 'Yes — and this is increasingly common worldwide...',
      isOpen: false 
    },
    // Aap baaki FAQs yahan copy kar sakte hain
  ];

  // Jis FAQ par click hoga, uski state toggle (true/false) ho jayegi
  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}