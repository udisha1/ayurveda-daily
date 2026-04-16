export interface Remedy {
  cat: string;
  icon: string;
  bg: string;
  banner: string;
  cat_label: string;
  title: string;
  desc: string;
  steps: string[];
  efficacy: number;
  time: string;
  doshas: string[];
}

export const REMEDIES: Remedy[] = [
  {
    cat: 'digestion',
    icon: '🍋',
    bg: '#fff8e6',
    banner: '#D4930F',
    cat_label: 'Digestion',
    title: 'Morning Lemon & Cumin Elixir',
    desc: 'Activates digestive fire (Agni) and flushes overnight toxins from your system.',
    steps: [
      'Warm one cup of water (not boiling)',
      'Squeeze half a lemon and add a pinch of black salt',
      'Add a pinch of roasted cumin powder',
      'Drink on an empty stomach every morning'
    ],
    efficacy: 4,
    time: '5 min',
    doshas: ['V', 'P']
  },

  {
    cat: 'digestion',
    icon: '🫚',
    bg: '#e8f4e1',
    banner: '#6B8F47',
    cat_label: 'Digestion',
    title: 'Ginger & Fennel Digestive Tea',
    desc: 'Relieves bloating, gas, and indigestion after heavy meals instantly.',
    steps: [
      'Boil 2 cups water with 1-inch fresh ginger',
      'Add 1 tsp fennel seeds and a pinch of asafoetida',
      'Simmer for 7 minutes, strain well',
      'Sip slowly after meals'
    ],
    efficacy: 5,
    time: '12 min',
    doshas: ['V', 'P', 'K']
  },

  {
    cat: 'digestion',
    icon: '🥛',
    bg: '#fef9e6',
    banner: '#D4930F',
    cat_label: 'Digestion',
    title: 'Triphala Detox Drink',
    desc: 'The three-fruit Ayurvedic classic that gently cleanses and rejuvenates the digestive tract.',
    steps: [
      'Add 1 tsp Triphala powder to a glass of warm water',
      'Stir well and let it steep 5 minutes',
      'Optionally add a pinch of rock salt',
      'Drink on an empty stomach or before bed'
    ],
    efficacy: 5,
    time: '5 min',
    doshas: ['V', 'P', 'K']
  },

  {
    cat: 'stress',
    icon: '🌿',
    bg: '#e8f4e1',
    banner: '#2D5A27',
    cat_label: 'Stress & Anxiety',
    title: 'Ashwagandha Night Milk',
    desc: 'The legendary adaptogen that lowers cortisol and builds resilience.',
    steps: [
      'Heat 1 cup milk',
      'Add 1 tsp ashwagandha powder',
      'Mix honey + cardamom',
      'Drink before sleeping'
    ],
    efficacy: 5,
    time: '8 min',
    doshas: ['V', 'K']
  },

  {
    cat: 'immunity',
    icon: '🌟',
    bg: '#fef9e6',
    banner: '#D4930F',
    cat_label: 'Immunity',
    title: 'Turmeric Golden Milk',
    desc: 'Classic immunity drink with turmeric.',
    steps: [
      'Warm milk',
      'Add turmeric + black pepper',
      'Add ghee or coconut oil',
      'Drink warm'
    ],
    efficacy: 5,
    time: '10 min',
    doshas: ['V', 'K']
  },

  {
    cat: 'skin',
    icon: '🌸',
    bg: '#fce8d5',
    banner: '#C4622D',
    cat_label: 'Skin Health',
    title: 'Neem & Turmeric Face Pack',
    desc: 'Clears acne and brightens skin.',
    steps: [
      'Mix neem + turmeric',
      'Add rose water',
      'Apply on face',
      'Wash after 15 min'
    ],
    efficacy: 4,
    time: '20 min',
    doshas: ['P', 'K']
  },

  {
    cat: 'sleep',
    icon: '🌙',
    bg: '#eae0f5',
    banner: '#5C3317',
    cat_label: 'Sleep',
    title: 'Nutmeg Warm Milk',
    desc: 'Helps deep sleep naturally.',
    steps: [
      'Warm milk',
      'Add nutmeg',
      'Add honey',
      'Drink before bed'
    ],
    efficacy: 4,
    time: '5 min',
    doshas: ['V']
  },

  {
    cat: 'hair',
    icon: '💆',
    bg: '#e8f4e1',
    banner: '#6B8F47',
    cat_label: 'Hair Health',
    title: 'Bhringraj Oil Treatment',
    desc: 'Prevents hair fall.',
    steps: [
      'Warm oil',
      'Massage scalp',
      'Leave for 1 hour',
      'Wash'
    ],
    efficacy: 5,
    time: '15 min',
    doshas: ['V', 'P']
  },

  {
    cat: 'joints',
    icon: '🦴',
    bg: '#e8f4e1',
    banner: '#6B8F47',
    cat_label: 'Joint Health',
    title: 'Turmeric Joint Drink',
    desc: 'Reduces joint pain.',
    steps: [
      'Mix turmeric + milk',
      'Add black pepper',
      'Drink daily'
    ],
    efficacy: 5,
    time: '5 min',
    doshas: ['V', 'K']
  },

  {
    cat: 'energy',
    icon: '⚡',
    bg: '#fff8e6',
    banner: '#D4930F',
    cat_label: 'Energy',
    title: 'Ashwagandha Energy Shot',
    desc: 'Boosts stamina.',
    steps: [
      'Mix ashwagandha',
      'Add warm water',
      'Add honey',
      'Drink morning'
    ],
    efficacy: 5,
    time: '3 min',
    doshas: ['V', 'K']
  }
];