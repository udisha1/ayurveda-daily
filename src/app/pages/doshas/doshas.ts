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
    {q:"What's your natural energy level throughout the day?",opts:[{t:"Energetic but scattered, peaks and valleys",d:"V"},{t:"Steady and driven, consistent energy",d:"P"},{t:"Slow to start, enduring stamina",d:"K"}]},
    {q:"How do you handle stress or change?",opts:[{t:"Get anxious, overwhelmed easily",d:"V"},{t:"Get frustrated, irritable, argumentative ",d:"P"},{t:"Stay calm, sometimes too passive",d:"K"}]},
    {q:"Describe your skin:",opts:[{t:"Dry, thin, sensitive",d:"V"},{t:"Warm, oily, prone to acne/rashes  ",d:"P"},{t:"Thick, oily, healthy-looking",d:"K"}]},
    {q:"What's your digestion like?",opts:[{t:"Irregular, bloating, constipation",d:"V"},{t:"Strong, fast, frequent hunger",d:"P"},{t:"Slow, heavy, sluggish",d:"K"}]},
    {q:"How do you handle emotions:",opts:[{t:"Worry, fear, anxious thoughts",d:"V"},{t:"Passionate, intense, quick to anger",d:"P"},{t:"Calm, stable, sentimental",d:"K"}]},
    {q:"Your food and appetite preferences:",opts:[{t:"Irregular appetite, skip meals",d:"V"},{t:"Strong appetite, need regular meals",d:"P"},{t:"Slow appetite, content with less",d:"K"}]},
    {q:"Your learning style and memory:",opts:[{t:"Quick learner, forget easily ",d:"V"},{t:"Sharp intellect, good retention ",d:"P"},{t:"Slow learner, excellent long-term memory ",d:"K"}]},
    {q:"How would you describe your sleep pattern?",opts:[{t:"Light sleeper, wake easily, variable sleep ",d:"V"},{t:"Moderate sleep, wake if disturbed, consistent",d:"P"},{t:"Deep sleeper, hard to wake up, sleep heavily",d:"K"}]},
    {q:"How's your body temperature preference?",opts:[{t:"Always cold, love warmth",d:"V"},{t:"Run hot, prefer cool environment ",d:"P"},{t:"Moderate, comfortable in most temps",d:"K"}]}

    // ... Paste your full questions array ...
  ];


  doshas = [
    {
      name: 'Vata',
      icon: '🌬️',
      class: 'vata',
      bg: '#E8F5FF',
      color: '#0B66C3',
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
      bg: '#FFF1E6',
      color: '#D9534F',
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
      bg: '#E9F7EF',
      color: '#2E8B57',
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
    this.answers.forEach(a => { if (a) counts[a]++; });
    const primaryKey = Object.keys(counts).reduce((a, b) => counts[a] > counts[b] ? a : b);
    const map: any = { V: 'vata', P: 'pitta', K: 'kapha' };
    const primaryClass = map[primaryKey] || 'vata';
    this.primaryDosha = this.doshas.find((d: any) => d.class === primaryClass);
    this.quizComplete = true;
  }

  retake() {
    this.current = 0;
    this.answers = [];
    this.quizComplete = false;
    this.primaryDosha = null;
  }
}