import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class FaqComponent {
  showBtn = false;

  faqs = [
    {
      question: 'What is Ayurveda?',
      answer: 'Ayurveda is an ancient Indian system of medicine that focuses on balancing the body, mind, and spirit through diet, lifestyle, herbs, and natural therapies.',
      open: false,
    },
    {
      question: 'What are the three doshas in Ayurveda?',
      answer: 'The three doshas are Vata (air & space), Pitta (fire & water), and Kapha (earth & water). Each person has a unique combination of these doshas that influences their health.',
      open: false,
    },
    {
      question: 'What is Ashwagandha used for?',
      answer: 'Ashwagandha is an adaptogenic herb used to reduce stress and anxiety, improve sleep quality, boost energy and vitality, and support immune function.',
      open: false,
    },
    {
      question: 'What are the benefits of turmeric?',
      answer: 'Turmeric contains curcumin which has powerful anti-inflammatory and antioxidant properties. It supports joint health, digestion, immunity, and skin health.',
      open: false,
    },
    {
      question: 'What are home remedies for cold in Ayurveda?',
      answer: 'Ayurvedic remedies for cold include ginger tea with honey, turmeric milk, steam inhalation with eucalyptus oil, and consuming tulsi (holy basil) leaves.',
      open: false,
    },
    {
      question: 'What foods are good for digestion in Ayurveda?',
      answer: 'Ayurveda recommends ginger, cumin, fennel, coriander, and warm water for better digestion. Avoid cold drinks and processed foods.',
      open: false,
    },
    {
      question: 'Is Ayurveda safe to use with modern medicine?',
      answer: 'Some Ayurvedic herbs can interact with medications. Always consult a qualified Ayurvedic practitioner and your doctor before combining treatments.',
      open: false,
    },
    {
      question: 'How long does it take for Ayurveda to show results?',
      answer: 'Ayurveda focuses on long-term wellness. Results vary by person and condition, but most people notice improvements within 4 to 12 weeks of consistent practice.',
      open: false,
    },
  ];

  toggle(index: number) {
    this.faqs[index].open = !this.faqs[index].open;
  }

  @HostListener('window:scroll')
  onScroll() {
    this.showBtn = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}