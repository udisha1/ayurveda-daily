import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  
  faqs = [
    {
      q:'What is Ayurveda?',
      a: 'Ayurveda is an ancient system of medicine.',
      isOpen: false
    },
    {
      q: 'Does AyurvedaDaily provide medical advice?',
      a: 'No. AyurvedaDaily is intended for educational and informational purposes only. The content should not be considered medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for health-related decisions.',
      isOpen: false
    },
    { 
      q: 'Is Ayurveda scientifically validated?', 
      a: 'Many Ayurvedic practices and herbs have been studied in modern clinical trials.',
      isOpen: false 
    },
    { 
      q: 'Can I practice Ayurveda alongside conventional medicine?', 
      a: 'Yes — and this is increasingly common worldwide.',
      isOpen: false 
    },
    {
      q: 'Are Ayurvedic herbs safe for everyone?',
      a: 'Ayurvedic herbs are natural, but they may not be suitable for everyone. Factors such as age, existing medical conditions, allergies, pregnancy, and medications can affect how the body responds to herbs. It is always recommended to consult a qualified healthcare professional or Ayurvedic practitioner before starting any new herbal remedy.',
      isOpen: false
    }
    

    
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}