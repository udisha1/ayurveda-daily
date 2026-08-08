
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-remedy-wizard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './remedy-wizard.html',
  styleUrls: ['./remedy-wizard.css']
})
export class RemedyWizardComponent {
  currentStep: number = 1;
  isCompleted: boolean = false;
  selectedCategory: string = '';
  selectedAge: string = '';
  selectedSymptom: string = '';
  selectedAllergy: string = '';
  customCategory: string = '';
  customSymptom: string = '';
  customAllergy: string = '';
  recommendedRemedy: any = null;

  categories = [
    { id: 'digestion', label: 'Digestion', icon: '🌿' },
    { id: 'stress', label: 'Stress & Anxiety', icon: '🧘' },
    { id: 'immunity', label: 'Immunity', icon: '🛡️' },
    { id: 'skin', label: 'Skin', icon: '✨' },
    { id: 'sleep', label: 'Sleep', icon: '🌙' },
    { id: 'hair', label: 'Hair', icon: '💆' },
    { id: 'joints', label: 'Joints', icon: '🦴' },
    { id: 'energy', label: 'Energy', icon: '⚡' }
  ];
  symptomsMap: { [key: string]: { id: string, label: string }[] } = {
    digestion: [
      { id: 'bloating', label: 'Bloating & Gas' },
      { id: 'acidity', label: 'Acidity / Heartburn' },
      { id: 'constipation', label: 'Irregular Digestion' }
    ],
    stress: [
      { id: 'insomnia', label: 'Restlessness / Overthinking' },
      { id: 'fatigue', label: 'Mental Fatigue' },
      { id: 'anxiety', label: 'Mild Anxiety symptoms' }
    ],
    immunity: [
      { id: 'cold', label: 'Frequent Cold & Cough' },
      { id: 'low_energy', label: 'Catching Infections Easily' }
    ],
    skin: [
      { id: 'acne', label: 'Acne & Breakouts' },
      { id: 'dryness', label: 'Extreme Dryness / Dullness' },
      { id: 'pigmentation', label: 'Uneven Skin Tone' }
    ],
    sleep: [
      { id: 'disturbed', label: 'Waking up in the middle of night' },
      { id: 'sleepless', label: 'Difficulty falling asleep' }
    ],
    hair: [
      { id: 'hairfall', label: 'Severe Hair Fall' },
      { id: 'dandruff', label: 'Dry & Itchy Dandruff' },
      { id: 'thinning', label: 'Hair Thinning / Premature Greying' }
    ],
    joints: [
      { id: 'stiffness', label: 'Morning Joint Stiffness' },
      { id: 'pain', label: 'Knee or Back Pain' }
    ],
    energy: [
      { id: 'lethargy', label: 'Chronic Lethargy / Always Tired' },
      { id: 'weakness', label: 'Low Stamina' }
    ]
  };




  allergies = [
    { id: 'none', label: 'No Allergies' },
    { id: 'dairy', label: 'Lactose / Dairy Allergy' },
    { id: 'nuts', label: 'Nuts Allergy' }
  ];
  masterDb: any = {
  // --- EXISTING SCREENSHOT CARDS ---
  'digestion_bloating': { title: 'Ginger & Fennel Tea', category: 'DIGESTION', icon: '🫚', time: '12 min', rating: [1, 1, 1, 1, 1], steps: ['Boil 2 cups water', 'Add 1-inch ginger', 'Add 1 tsp fennel', 'Strain and sip'] },
  'digestion_acidity': { title: 'Lemon & Cumin Elixir', category: 'DIGESTION', icon: '🍋', time: '5 min', rating: [1, 1, 1, 1, 0], steps: ['Warm water', 'Squeeze lemon', 'Add cumin powder'] },
  'digestion_constipation': { title: 'Triphala Detox Drink', category: 'DIGESTION', icon: '🥛', time: '5 min', rating: [1, 1, 1, 1, 1], steps: ['1 tsp Triphala powder', 'Warm water', 'Stir well'] },
  'stress_standard': { title: 'Ashwagandha Night Milk', category: 'STRESS', icon: '🌿', time: '8 min', rating: [1, 1, 1, 1, 1], steps: ['Heat milk', 'Add 1 tsp ashwagandha', 'Mix honey'] },
  'immunity_standard': { title: 'Turmeric Golden Milk', category: 'IMMUNITY', icon: '☀️', time: '10 min', rating: [1, 1, 1, 1, 1], steps: ['Warm milk', 'Turmeric', 'Black pepper', 'Ghee'] },
  'skin_standard': { title: 'Neem & Turmeric Face Pack', category: 'SKIN', icon: '🌸', time: '20 min', rating: [1, 1, 1, 1, 0], steps: ['Mix neem & turmeric', 'Add rose water', 'Apply 15 mins'] },
  'sleep_standard': { title: 'Nutmeg Warm Milk', category: 'SLEEP', icon: '🌙', time: '5 min', rating: [1, 1, 1, 1, 0], steps: ['Warm milk', 'Nutmeg', 'Honey'] },
  'hair_standard': { title: 'Bhringraj Oil Treatment', category: 'HAIR', icon: '🦊', time: '15 min', rating: [1, 1, 1, 1, 1], steps: ['Warm oil', 'Massage scalp', 'Wash after 1 hr'] },
  'joints_standard': { title: 'Turmeric Joint Drink', category: 'JOINTS', icon: '🦴', time: '5 min', rating: [1, 1, 1, 1, 1], steps: ['Warm milk', 'Turmeric', 'Ginger'] },
  'energy_standard': { title: 'Ashwagandha Energy Shot', category: 'ENERGY', icon: '⚡', time: '3 min', rating: [1, 1, 1, 1, 1], steps: ['Mix ashwagandha', 'Warm water', 'Honey'] },

  // --- NEW EXTRA ALLERGY-SAFE / AGE-SPECIFIC CARDS ---
  'digestion_dairy': { title: 'Cumin & Coriander Infusion', category: 'DIGESTION (DAIRY FREE)', icon: '🌱', time: '7 min', rating: [1, 1, 1, 1, 1], steps: ['Boil seeds in water', 'Strain', 'Add rock salt'] },
  'stress_dairy': { title: 'Brahmi Floral Tea', category: 'STRESS (DAIRY FREE)', icon: '🌼', time: '5 min', rating: [1, 1, 1, 1, 1], steps: ['Brew Brahmi leaves', 'Add maple syrup', 'Serve warm'] },
  'immunity_child': { title: 'Tulsi & Mulethi Drops', category: 'IMMUNITY (CHILD SAFE)', icon: '💧', time: '5 min', rating: [1, 1, 1, 1, 1], steps: ['Boil Tulsi in water', 'Add tiny amount honey', 'Give lukewarm'] },
  'joints_dairy': { title: 'Nirgundi Oil Massage', category: 'JOINTS (EXTERNAL)', icon: '🏺', time: '10 min', rating: [1, 1, 1, 1, 1], steps: ['Heat oil', 'Massage joint', 'Keep warm cloth'] },
  'energy_child': { title: 'Mild Amla Vitality Drink', category: 'ENERGY (CHILD SAFE)', icon: '⚡', time: '3 min', rating: [1, 1, 1, 1, 1], steps: ['Mix diluted Amla juice', 'Add mild honey', 'Serve chilled'] },
  'sleep_dairy': { title: 'Chamomile Sleep Tea', category: 'SLEEP (DAIRY FREE)', icon: '💤', time: '6 min', rating: [1, 1, 1, 1, 1], steps: ['Brew chamomile', 'Add pinch of nutmeg', 'Sip slowly'] }
};
get currentSymptoms() {
  // Agar category select nahi hai, toh empty list return karega
  if (!this.selectedCategory) return [];
  // Agar category exist karti hai, toh uske symptoms return karega
  return this.symptomsMap[this.selectedCategory] || [];
}
submitAssessment() {
    // 1. Doctor Advice (Agar user ne custom kuch dala ya Others chuna)
    if (this.selectedCategory === 'others' || this.selectedSymptom === 'others' || this.selectedAllergy === 'others') {
      this.recommendedRemedy = {
        title: 'Expert Consultation Required',
        category: 'CLINICAL ADVICE',
        icon: '🏛️',
        description: 'For unique conditions, we recommend professional Nadi-Pariksha.',
        steps: ['Contact BAMS Expert', 'Do not self-medicate', 'Record symptoms'],
        isDoctorAdvice: true,
        rating: [1,1,1,1,1], time: 'N/A'
      };
    } 
    // 2. Intelligent Routing
    else {
      let key = `${this.selectedCategory}_standard`;
      
      // Allergy check
      if (this.selectedAllergy !== 'none' && this.masterDb[`${this.selectedCategory}_dairy`]) {
        key = `${this.selectedCategory}_dairy`;
      } 
      // Age check
      else if (this.selectedAge === 'child' && this.masterDb[`${this.selectedCategory}_child`]) {
        key = `${this.selectedCategory}_child`;
      }
      // Symptom specific check
      else if (this.masterDb[`${this.selectedCategory}_${this.selectedSymptom}`]) {
        key = `${this.selectedCategory}_${this.selectedSymptom}`;
      }

      this.recommendedRemedy = this.masterDb[key];
    }
    this.isCompleted = true;
}
nextStep() {
  if (this.currentStep < 4) {
    this.currentStep++;
  } else {
    this.submitAssessment();
  }
}

prevStep() {
  if (this.currentStep > 1) {
    this.currentStep--;
  }
}

resetWizard() {
  this.currentStep = 1;
  this.isCompleted = false;

  this.selectedCategory = '';
  this.selectedAge = '';
  this.selectedSymptom = '';
  this.selectedAllergy = '';

  this.customCategory = '';
  this.customSymptom = '';
  this.customAllergy = '';

  this.recommendedRemedy = null;
}
}