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
    q: 'What is Ayurveda?',
    a: 'Ayurveda is a traditional Indian system of medicine that focuses on balancing the body, mind, and spirit through natural remedies, diet, and lifestyle practices.',
    isOpen: false
  },
  {
    q: 'What are the three doshas?',
    a: 'The three doshas are Vata, Pitta, and Kapha. They represent different energy patterns in the body and influence physical and mental characteristics.',
    isOpen: false
  },
  {
    q: 'How do I know my dosha type?',
    a: 'Your dosha type can be determined by analyzing your body structure, digestion, energy levels, and emotional tendencies. A qualified Ayurvedic practitioner can provide an accurate assessment.',
    isOpen: false
  },
  {
    q: 'Are Ayurvedic herbs safe for daily use?',
    a: 'Many Ayurvedic herbs are safe when used properly, but it is recommended to consult a healthcare professional before starting any new herbal regimen.',
    isOpen: false
  },
  {
    q: 'How long does Ayurveda take to show results?',
    a: 'Results vary depending on the condition and consistency of treatment. Some people notice benefits within a few days, while chronic issues may take several weeks.',
    isOpen: false
  },
  {
    q: 'Can Ayurveda be used alongside modern medicine?',
    a: 'Yes, Ayurveda can often complement modern treatments, but you should consult both your doctor and an Ayurvedic practitioner before combining therapies.',
    isOpen: false
  },
  {
    q: 'Do Ayurvedic remedies have side effects?',
    a: 'When used correctly and in appropriate doses, Ayurvedic remedies are generally gentle. Misuse or poor-quality products may cause unwanted effects.',
    isOpen: false
  },
  {
    q: 'Is Ayurveda suitable for all age groups?',
    a: 'Yes, Ayurvedic principles can be adapted for children, adults, and older individuals with personalized recommendations based on their constitution and health needs.',
    isOpen: false
  }
];

  // Jis FAQ par click hoga, uski state toggle (true/false) ho jayegi
  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}