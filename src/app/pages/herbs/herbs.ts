import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Herb {
  name: string;
  sanskrit: string;
  icon: string;
  bg: string;
  accent: string;
  family: string;
  cat: string[];
  rasa: string;
  virya: string;
  vipaka: string;
  desc: string;
  benefits: string[];
  uses: string;
  caution: string;
  doshas: string[];
}

@Component({
  selector: 'app-herbs',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './herbs.html',
  styleUrls: ['./herbs.css']
})
export class HerbsComponent implements OnInit {
  currentFilter = 'all';
  currentSearch = '';
  private searchTimeout: any;
  private filteredHerbsCache: Herb[] = [];

  ngOnInit(): void {
    this.updateFilteredHerbs();
  }

  herbs: Herb[] = [
    {
      name: 'Ashwagandha',
      sanskrit: 'Withania somnifera',
      icon: '🌿',
      bg: '#e8f4e1',
      accent: '#6B8F47',
      family: 'Solanaceae',
      cat: ['adaptogen'],
      rasa: 'Bitter, Astringent, Sweet',
      virya: 'Heating',
      vipaka: 'Sweet',
      desc: 'The most revered Ayurvedic adaptogen, Ashwagandha strengthens immunity and promotes longevity. Known for stress relief and rejuvenation.',
      benefits: ['Reduces cortisol', 'Builds stamina', 'Improves sleep', 'Thyroid support', 'Muscle strength'],
      uses: '1 tsp in warm milk at bedtime.',
      caution: 'Avoid during pregnancy.',
      doshas: ['V', 'K']
    },
    {
      name: 'Shatavari',
      sanskrit: 'Asparagus racemosus',
      icon: '🌸',
      bg: '#fde8f0',
      accent: '#B85B7A',
      family: 'Asparagaceae',
      cat: ['adaptogen'],
      rasa: 'Sweet, Bitter',
      virya: 'Cooling',
      vipaka: 'Sweet',
      desc: 'The "mother of many" herb, Shatavari nourishes and rejuvenates the female reproductive system while boosting immunity.',
      benefits: ['Hormonal balance', 'Reproductive health', 'Nourishes tissues', 'Cooling effect', 'Lactation support'],
      uses: '1 tsp powder in warm milk twice daily.',
      caution: 'Use cautiously in cases of congestion.',
      doshas: ['P', 'V']
    },
    {
      name: 'Ginger',
      sanskrit: 'Zingiber officinale',
      icon: '🌶️',
      bg: '#fff4e8',
      accent: '#D4930F',
      family: 'Zingiberaceae',
      cat: ['digestion'],
      rasa: 'Pungent, Sweet',
      virya: 'Heating',
      vipaka: 'Sweet',
      desc: 'A powerful digestive stimulant, ginger ignites agni (digestive fire) and reduces inflammation. Essential for cold and flu relief.',
      benefits: ['Stimulates digestion', 'Anti-inflammatory', 'Respiratory support', 'Circulation boost', 'Nausea relief'],
      uses: '1/2 tsp fresh ginger in warm water before meals.',
      caution: 'Use moderately in high Pitta conditions.',
      doshas: ['V', 'K']
    },
    {
      name: 'Cumin',
      sanskrit: 'Cuminum cyminum',
      icon: '🌾',
      bg: '#f4ede8',
      accent: '#8B6F47',
      family: 'Apiaceae',
      cat: ['digestion'],
      rasa: 'Pungent, Bitter',
      virya: 'Heating',
      vipaka: 'Pungent',
      desc: 'An ancient digestive spice that improves nutrient absorption and reduces bloating. A staple in Ayurvedic cooking.',
      benefits: ['Improves digestion', 'Reduces bloating', 'Nutrient absorption', 'Anti-gas properties', 'Metabolism boost'],
      uses: 'Sprinkle in curries or steep 1 tsp seeds in water.',
      caution: 'Avoid in excess during high heat.',
      doshas: ['V', 'K']
    },
    {
      name: 'Tulsi (Holy Basil)',
      sanskrit: 'Ocimum sanctum',
      icon: '🪴',
      bg: '#e8fde8',
      accent: '#4CAF50',
      family: 'Lamiaceae',
      cat: ['adaptogen'],
      rasa: 'Pungent, Bitter',
      virya: 'Heating',
      vipaka: 'Pungent',
      desc: 'Sacred herb of protection and healing, Tulsi enhances immunity, clarifies the mind, and supports emotional balance.',
      benefits: ['Immune booster', 'Stress relief', 'Mental clarity', 'Respiratory support', 'Anti-microbial'],
      uses: 'Brew 5-10 fresh leaves in hot water as tea.',
      caution: 'Avoid in high Pitta during extreme heat.',
      doshas: ['V', 'K']
    },
    {
      name: 'Fennel',
      sanskrit: 'Foeniculum vulgare',
      icon: '🌱',
      bg: '#f0fae8',
      accent: '#8DC469',
      family: 'Apiaceae',
      cat: ['digestion'],
      rasa: 'Sweet, Pungent',
      virya: 'Cooling',
      vipaka: 'Sweet',
      desc: 'A gentle digestive aid with cooling properties, fennel eases cramping and supports healthy metabolism. Safe for all ages.',
      benefits: ['Soothes digestion', 'Reduces cramps', 'Cooling effect', 'Fresh breath', 'Lactation support'],
      uses: 'Chew seeds or brew 1 tsp in hot water.',
      caution: 'Generally safe for all doshas.',
      doshas: ['V', 'P', 'K']
    },
    {
      name: 'Brahmi',
      sanskrit: 'Bacopa monnieri',
      icon: '🧠',
      bg: '#e8f9fb',
      accent: '#4DA6A6',
      family: 'Plantaginaceae',
      cat: ['adaptogen'],
      rasa: 'Bitter, Astringent',
      virya: 'Cooling',
      vipaka: 'Pungent',
      desc: 'The premier herb for mental clarity and cognitive function, Brahmi enhances memory and supports nervous system health.',
      benefits: ['Enhances memory', 'Mental clarity', 'Cognitive support', 'Cooling nature', 'Nerve tonic'],
      uses: '1/2 tsp powder in ghee twice daily.',
      caution: 'Use cautiously if naturally cold or sluggish.',
      doshas: ['P', 'K']
    },
    {
      name: 'Triphala',
      sanskrit: 'Mix of Amalaki, Bibhitaki, Haritaki',
      icon: '⚖️',
      bg: '#f9e8e8',
      accent: '#B5723A',
      family: 'Combretaceae',
      cat: ['digestion'],
      rasa: 'All Six Tastes',
      virya: 'Balancing',
      vipaka: 'Sweet',
      desc: 'The ultimate rejuvenation formula, Triphala balances all three doshas while gently cleansing and supporting digestion.',
      benefits: ['Digestive cleanse', 'Balances doshas', 'Gentle laxative', 'Tissue rejuvenation', 'Eye health'],
      uses: '1 tsp in warm water at night.',
      caution: 'Avoid during pregnancy; use cautiously with weak digestion.',
      doshas: ['V', 'P', 'K']
    },
    {
      name: 'Turmeric',
      sanskrit: 'Curcuma longa',
      icon: '🧡',
      bg: '#fff9e8',
      accent: '#D4930F',
      family: 'Zingiberaceae',
      cat: ['digestion'],
      rasa: 'Bitter, Pungent',
      virya: 'Heating',
      vipaka: 'Pungent',
      desc: 'The golden healer, turmeric is a powerful anti-inflammatory and antioxidant that supports every tissue system in the body.',
      benefits: ['Anti-inflammatory', 'Liver support', 'Joint health', 'Skin healing', 'Immune boost'],
      uses: '1/2 tsp in warm milk with black pepper.',
      caution: 'Avoid in excess with high Pitta or bleeding conditions.',
      doshas: ['V', 'K']
    },
    {
      name: 'Licorice',
      sanskrit: 'Glycyrrhiza glabra',
      icon: '🍯',
      bg: '#f5ede8',
      accent: '#A0826D',
      family: 'Fabaceae',
      cat: ['adaptogen'],
      rasa: 'Sweet',
      virya: 'Cooling',
      vipaka: 'Sweet',
      desc: 'A sweet rejuvenative herb, licorice soothes the digestive and respiratory systems while supporting adrenal function.',
      benefits: ['Respiratory support', 'Adrenal tonic', 'Anti-inflammatory', 'Soothing', 'Energy boost'],
      uses: '1/4 to 1/2 tsp daily in warm milk.',
      caution: 'Avoid with high blood pressure; limit use to 6 weeks.',
      doshas: ['V', 'P']
    }
  ];

  setFilter(cat: string): void {
    this.currentFilter = cat;
    this.updateFilteredHerbs();
  }

  onSearchChange(): void {
    // Debounce the search
    clearTimeout(this.searchTimeout);
    this.searchTimeout = setTimeout(() => {
      this.currentSearch = this.currentSearch.toLowerCase();
      this.updateFilteredHerbs();
    }, 300);
  }

  private updateFilteredHerbs(): void {
    this.filteredHerbsCache = this.herbs.filter(h => {
      const catMatch = this.currentFilter === 'all' || h.cat.includes(this.currentFilter);
      const searchMatch = !this.currentSearch ||
        h.name.toLowerCase().includes(this.currentSearch) ||
        h.sanskrit.toLowerCase().includes(this.currentSearch) ||
        h.benefits.some(b => b.toLowerCase().includes(this.currentSearch));
      return catMatch && searchMatch;
    });
  }

  clearFilters(): void {
    this.currentFilter = 'all';
    this.currentSearch = '';
    const searchInput = document.querySelector('input[placeholder*="Search herbs"]') as HTMLInputElement;
    if (searchInput) {
      searchInput.value = '';
    }
    this.updateFilteredHerbs();
  }

  get filteredHerbs(): Herb[] {
    return this.filteredHerbsCache;
  }
}