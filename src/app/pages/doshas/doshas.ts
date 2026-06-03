import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-doshas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doshas.html',
  styleUrls: ['./doshas.css'],
})
export class DoshasComponent {
  current = 0;
  answers: string[] = [];
  quizComplete = false;
  primaryDosha: any = null;

  questions = [
    {
      q: 'What is your natural body frame?',
      opts: [
        { t: 'Thin, light, find it hard to gain weight', d: 'V' },
        { t: 'Medium, muscular, gain/lose weight moderately', d: 'P' },
        { t: 'Larger, solid frame, gain weight easily', d: 'K' },
      ],
    },
    {
      q: 'How would you describe your skin texture?',
      opts: [
        { t: 'Dry, rough, thin, or prone to cracking', d: 'V' },
        { t: 'Warm, reddish, sensitive, or prone to rashes', d: 'P' },
        { t: 'Thick, smooth, oily, soft, and relatively cool', d: 'K' },
      ],
    },
    {
      q: 'How do you typically react to stressful situations?',
      opts: [
        { t: 'Become anxious, worried, or fearful', d: 'V' },
        { t: 'Become irritable, angry, or impatient', d: 'P' },
        { t: 'Remain calm, quiet, or occasionally defensive', d: 'K' },
      ],
    },
    {
      q: 'What are your sleep patterns usually like?',
      opts: [
        { t: 'Light sleeper, easily disturbed, prone to insomnia', d: 'V' },
        { t: 'Sound sleeper, moderate duration, usually wakes hot', d: 'P' },
        { t: 'Deep, heavy sleeper, struggles to wake up early', d: 'K' },
      ],
    },
    {
      q: 'How would you characterize your appetite and digestion?',
      opts: [
        { t: 'Irregular; fluctuates widely from day to day', d: 'V' },
        { t: 'Strong and intense; cannot skip meals without feeling angry', d: 'P' },
        { t: 'Slow but steady; can easily skip meals without discomfort', d: 'K' },
      ],
    },
    {
      q: 'How do you learn new information and recall tasks?',
      opts: [
        { t: 'Learn very quickly but forget just as fast', d: 'V' },
        { t: 'Sharp comprehension; remembers things systemically', d: 'P' },
        { t: 'Learns slowly but retains information permanently', d: 'K' },
      ],
    },
    {
      q: 'Which weather condition feels the most uncomfortable?',
      opts: [
        { t: 'Cold, windy, and dry weather', d: 'V' },
        { t: 'Hot, humid, and bright sunny days', d: 'P' },
        { t: 'Cold, damp, rainy, and cloudy weather', d: 'K' },
      ],
    },
    {
      q: 'How do you handle money and personal finances?',
      opts: [
        { t: 'Spends quickly on impulse; struggles to save systematically', d: 'V' },
        { t: 'Spends intentionally on quality items, structured investments', d: 'P' },
        { t: 'Good at accumulating wealth; prefers keeping savings safe', d: 'K' },
      ],
    },
    {
      q: 'What type of activity levels describe your daily lifestyle?',
      opts: [
        { t: 'Highly active, restless, always walking or talking fast', d: 'V' },
        { t: 'Goal-oriented, competitive, intense focus on tasks', d: 'P' },
        { t: 'Steady, relaxed pace, moves gracefully, prone to lethargy', d: 'K' },
      ],
    },
    {
      q: 'How would you describe your hair type?',
      opts: [
        { t: 'Dry, frizzy, brittle, or naturally curly', d: 'V' },
        { t: 'Fine, thin, premature thinning/graying, warm tone', d: 'P' },
        { t: 'Thick, abundant, oily, wavy, and strong strands', d: 'K' },
      ],
    },
  ];

  doshas = [
    {
      name: 'Vata',
      icon: '🌬️',
      class: 'vata',
      element: 'Air + Space · Movement Energy',
      desc: 'Vata governs all movement in the body — nerve impulses, breathing, circulation, and thoughts.',
      traits: {
        physical: ['Thin frame', 'Dry skin', 'Cold hands', 'Light sleeper', 'Variable appetite'],
        mental: ['Creative', 'Quick learner', 'Anxious', 'Forgetful'],
        imbalance: ['Anxiety', 'Constipation', 'Dry skin', 'Insomnia', 'Joint pain'],
        foods: ['Warm soups', 'Ghee', 'Root vegetables', 'Sesame'],
      },
    },
    {
      name: 'Pitta',
      icon: '🔥',
      class: 'pitta',
      element: 'Fire + Water · Transformation Energy',
      desc: 'Pitta governs digestion, metabolism, and transformation of experiences into knowledge.',
      traits: {
        physical: ['Medium build', 'Warm skin', 'Strong digestion', 'Sharp features'],
        mental: ['Ambitious', 'Leadership', 'Irritable', 'Perfectionist'],
        imbalance: ['Acid reflux', 'Inflammation', 'Skin rashes', 'Anger', 'Migraines'],
        foods: ['Coconut water', 'Cucumber', 'Mint', 'Coriander'],
      },
    },
    {
      name: 'Kapha',
      icon: '🌊',
      class: 'kapha',
      element: 'Earth + Water · Structure Energy',
      desc: 'Kapha governs structure, tissues, lubrication, and stability in the body.',
      traits: {
        physical: ['Stocky build', 'Smooth skin', 'Heavy sleeper', 'Strong stamina'],
        mental: ['Patient', 'Nurturing', 'Slow learner', 'Loyal'],
        imbalance: ['Weight gain', 'Congestion', 'Depression', 'Lethargy', 'Diabetes'],
        foods: ['Ginger tea', 'Light grains', 'Bitter greens', 'Honey'],
      },
    },
  ];

  balanceTips = [
    {
      icon: '🌅',
      title: 'Rise with the Sun',
      desc: 'Waking before 6 AM aligns your circadian rhythm.',
    },
    { icon: '🍽️', title: 'Eat Seasonally', desc: 'Eat what grows locally and seasonally.' },
    { icon: '🧘', title: 'Daily Meditation', desc: '10 minutes calms mind and balances doshas.' },
    { icon: '🌿', title: 'Abhyanga Oil Massage', desc: 'Daily oil massage balances all doshas.' },
    { icon: '💧', title: 'Hydrate with Warmth', desc: 'Sip warm water or herbal teas.' },
    { icon: '🌙', title: 'Sleep by 10 PM', desc: 'Ensures deeper and restorative sleep.' },
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

    this.answers.forEach((a) => counts[a]++);

    const primaryKey = Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b));

    const mapping: any = {
      V: 'vata',
      P: 'pitta',
      K: 'kapha',
    };

    this.primaryDosha = this.doshas.find((d) => d.class === mapping[primaryKey]);
    console.log('RESULT:', this.primaryDosha);

    this.quizComplete = true;
  }
  retake() {
    this.current = 0;
    this.answers = [];
    this.quizComplete = false;
    this.primaryDosha = null;
  }
}
