import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-doshas',
  templateUrl: './doshas.html',
   imports: [CommonModule],
  styleUrls: ['./doshas.css']
})
export class DoshasComponent {
  current = 0;
  answers: string[] = [];
  quizComplete = false;
  primaryDosha: any = null;

  questions = [
    { q: "What is your natural body frame?", opts: [{ t: "Thin, light, find it hard to gain weight", d: "V" },{ t: "Medium, muscular, gain/lose weight moderately", d: "P" },{ t: "Larger, solid frame, gain weight easily", d: "K" }] },
    // ... Paste your full questions array ...
  ];


  doshas = [
    {
      name: 'Vata',
      icon: '🌬️',
      class: 'vata',
      element: 'Air + Space · Movement Energy',
      desc: 'Vata governs all movement in the body — nerve impulses, breathing, circulation, and thoughts.',
      traits: {
        physical: ['Thin frame','Dry skin','Cold hands','Light sleeper','Variable appetite'],
        mental: ['Creative','Quick learner','Anxious','Forgetful'],
        imbalance: ['Anxiety','Constipation','Dry skin','Insomnia','Joint pain'],
        foods: ['Warm soups','Ghee','Root vegetables','Sesame']
      }
    },
    {
      name: 'Pitta',
      icon: '🔥',
      class: 'pitta',
      element: 'Fire + Water · Transformation Energy',
      desc: 'Pitta governs digestion, metabolism, and transformation of experiences into knowledge.',
      traits: {
        physical: ['Medium build','Warm skin','Strong digestion','Sharp features'],
        mental: ['Ambitious','Leadership','Irritable','Perfectionist'],
        imbalance: ['Acid reflux','Inflammation','Skin rashes','Anger','Migraines'],
        foods: ['Coconut water','Cucumber','Mint','Coriander']
      }
    },
    {
      name: 'Kapha',
      icon: '🌊',
      class: 'kapha',
      element: 'Earth + Water · Structure Energy',
      desc: 'Kapha governs structure, tissues, lubrication, and stability in the body.',
      traits: {
        physical: ['Stocky build','Smooth skin','Heavy sleeper','Strong stamina'],
        mental: ['Patient','Nurturing','Slow learner','Loyal'],
        imbalance: ['Weight gain','Congestion','Depression','Lethargy','Diabetes'],
        foods: ['Ginger tea','Light grains','Bitter greens','Honey']
      }
    }
  ];

  balanceTips = [
    { icon: '🌅', title: 'Rise with the Sun', desc: 'Waking before 6 AM aligns your circadian rhythm.' },
    { icon: '🍽️', title: 'Eat Seasonally', desc: 'Eat what grows locally and seasonally.' },
    { icon: '🧘', title: 'Daily Meditation', desc: '10 minutes calms mind and balances doshas.' },
    { icon: '🌿', title: 'Abhyanga Oil Massage', desc: 'Daily oil massage balances all doshas.' },
    { icon: '💧', title: 'Hydrate with Warmth', desc: 'Sip warm water or herbal teas.' },
    { icon: '🌙', title: 'Sleep by 10 PM', desc: 'Ensures deeper and restorative sleep.' }
  ];

  get progressPercentage() {
    return ((this.current + 1) / this.questions.length) * 100;
  }

  selectAnswer(dosha: string) {
    this.answers[this.current] = dosha;
  }

  next() {
    if (this.current < this.questions.length - 1) {
      this.current++;
    } else {
      this.calculateResult();
    }
  }

  prev() {
    if (this.current > 0) this.current--;
  }

  calculateResult() {
    const counts: any = { V: 0, P: 0, K: 0 };
    this.answers.forEach(a => counts[a]++);
    const primaryKey = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    this.primaryDosha = this.doshas.find((d: any) => d.class === primaryKey);
    this.quizComplete = true;
  }

  retake() {
    this.current = 0;
    this.answers = [];
    this.quizComplete = false;
    this.primaryDosha = null;
  }
}