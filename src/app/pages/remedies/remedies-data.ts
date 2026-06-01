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
  },

  {
    cat: 'womens-health',
    icon: '🌺',
    bg: '#fce8d5',
    banner: '#C4622D',
    cat_label: 'Women\'s Health',
    title: 'Ashoka Bark Herbal Drink',
    desc: 'Supports hormonal balance and relieves menstrual discomfort.',
    steps: [
      'Boil 1 tsp Ashoka bark powder in 2 cups of water',
      'Reduce to 1 cup',
      'Strain and add honey if needed',
      'Drink warm'
    ],
    efficacy: 4,
    time: '15 min',
    doshas: ['P', 'K']
  },
  {
    cat: 'womens-health',
    icon: '🌱',
    bg: '#e8f4e1',
    banner: '#6B8F47',
    cat_label: 'Women\'s Health',
    title: 'Fenugreek Seed Water',
    desc: 'Eases cramps and supports healthy menstrual flow.',
    steps: [
      'Soak 1 tsp fenugreek seeds in a glass of water overnight',
      'In the morning, warm the water slightly',
      'Strain and drink on an empty stomach'
    ],
    efficacy: 5,
    time: '5 min',
    doshas: ['V', 'K']
  },
  {
    cat: 'womens-health',
    icon: '🥛',
    bg: '#fef9e6',
    banner: '#D4930F',
    cat_label: 'Women\'s Health',
    title: 'Shatavari Milk Tonic',
    desc: 'A rejuvenating tonic for overall female reproductive health.',
    steps: [
      'Warm a cup of milk',
      'Mix in 1 tsp Shatavari powder',
      'Add a pinch of cardamom and honey',
      'Drink before bedtime'
    ],
    efficacy: 5,
    time: '5 min',
    doshas: ['V', 'P']
  },
  {
    cat: 'weight-management',
    icon: '💧',
    bg: '#e6f7ff',
    banner: '#007BFF',
    cat_label: 'Weight Management',
    title: 'Jeera Detox Water',
    desc: 'Boosts metabolism and aids in natural fat burn.',
    steps: [
      'Boil 1 tsp cumin (jeera) seeds in 2 cups of water',
      'Simmer for 5 minutes',
      'Strain and add a few drops of lemon juice',
      'Drink warm in the morning'
    ],
    efficacy: 4,
    time: '10 min',
    doshas: ['V', 'K']
  },
  {
    cat: 'weight-management',
    icon: '🍯',
    bg: '#fff8e6',
    banner: '#D4930F',
    cat_label: 'Weight Management',
    title: 'Cinnamon Honey Drink',
    desc: 'Regulates blood sugar and supports healthy weight management.',
    steps: [
      'Warm a cup of water',
      'Add 1/2 tsp cinnamon powder',
      'Mix in 1 tsp raw honey once lukewarm',
      'Drink on an empty stomach'
    ],
    efficacy: 5,
    time: '5 min',
    doshas: ['K']
  },
  {
    cat: 'weight-management',
    icon: '🍵',
    bg: '#e8f4e1',
    banner: '#2D5A27',
    cat_label: 'Weight Management',
    title: 'Ajwain Fat Burn Tea',
    desc: 'Improves digestion and helps reduce belly fat.',
    steps: [
      'Boil 1 tsp ajwain (carom seeds) in 2 cups of water',
      'Simmer until reduced to half',
      'Strain and sip warm after meals'
    ],
    efficacy: 4,
    time: '10 min',
    doshas: ['V', 'K']
  },
  {
    cat: 'cold-cough',
    icon: '🌿',
    bg: '#e8f4e1',
    banner: '#6B8F47',
    cat_label: 'Cold & Cough',
    title: 'Tulsi Ginger Kadha',
    desc: 'A powerful decoction for sore throat and congestion relief.',
    steps: [
      'Boil 2 cups of water with 5-6 crushed Tulsi leaves and 1-inch grated ginger',
      'Add a pinch of black pepper and cloves',
      'Simmer for 10 minutes, strain',
      'Add honey and drink warm'
    ],
    efficacy: 5,
    time: '15 min',
    doshas: ['V', 'K']
  },
  {
    cat: 'cold-cough',
    icon: '💛',
    bg: '#fef9e6',
    banner: '#D4930F',
    cat_label: 'Cold & Cough',
    title: 'Turmeric Pepper Milk',
    desc: 'Soothes throat and boosts immunity against seasonal flu.',
    steps: [
      'Warm a cup of milk',
      'Add 1/2 tsp turmeric powder and a pinch of black pepper',
      'Stir well and drink before bed'
    ],
    efficacy: 5,
    time: '5 min',
    doshas: ['V', 'K']
  },
  {
    cat: 'cold-cough',
    icon: '☕',
    bg: '#fce8d5',
    banner: '#C4622D',
    cat_label: 'Cold & Cough',
    title: 'Mulethi Herbal Tea',
    desc: 'Clears respiratory tract and relieves persistent cough.',
    steps: [
      'Boil 1 tsp Mulethi (licorice) root powder in a cup of water',
      'Simmer for 5 minutes',
      'Strain and sip slowly'
    ],
    efficacy: 4,
    time: '10 min',
    doshas: ['V', 'P']
  },
  {
    cat: 'heart-health',
    icon: '❤️',
    bg: '#ffe6e6',
    banner: '#D32F2F',
    cat_label: 'Heart Health',
    title: 'Arjuna Bark Tea',
    desc: 'Strengthens heart muscles and supports healthy circulation.',
    steps: [
      'Boil 1 tsp Arjuna bark powder in a cup of water or milk',
      'Simmer for 5-10 minutes',
      'Strain and drink warm daily'
    ],
    efficacy: 5,
    time: '15 min',
    doshas: ['P', 'K']
  },
  {
    cat: 'heart-health',
    icon: '🧄',
    bg: '#fef9e6',
    banner: '#D4930F',
    cat_label: 'Heart Health',
    title: 'Garlic Honey Mix',
    desc: 'Helps manage cholesterol levels naturally.',
    steps: [
      'Crush 1-2 raw garlic cloves',
      'Mix with 1 tsp raw honey',
      'Consume on an empty stomach in the morning'
    ],
    efficacy: 4,
    time: '2 min',
    doshas: ['V', 'K']
  },
  {
    cat: 'heart-health',
    icon: '🌱',
    bg: '#e8f4e1',
    banner: '#6B8F47',
    cat_label: 'Heart Health',
    title: 'Coriander Detox Water',
    desc: 'Cooling remedy that supports healthy blood pressure levels.',
    steps: [
      'Soak 1 tsp crushed coriander seeds in a glass of water overnight',
      'Strain the water in the morning',
      'Drink on an empty stomach'
    ],
    efficacy: 4,
    time: '5 min',
    doshas: ['P', 'V']
  },
  {
    cat: 'brain-focus',
    icon: '🧠',
    bg: '#e6e6fa',
    banner: '#6A5ACD',
    cat_label: 'Brain & Focus',
    title: 'Brahmi Herbal Drink',
    desc: 'Enhances memory, concentration, and mental clarity.',
    steps: [
      'Mix 1/2 tsp Brahmi powder in warm water or milk',
      'Add a little honey if desired',
      'Drink daily in the morning'
    ],
    efficacy: 5,
    time: '5 min',
    doshas: ['V', 'P', 'K']
  },
  {
    cat: 'brain-focus',
    icon: '🥛',
    bg: '#fef9e6',
    banner: '#D4930F',
    cat_label: 'Brain & Focus',
    title: 'Almond Saffron Milk',
    desc: 'Nourishes the brain and nervous system.',
    steps: [
      'Soak 5-7 almonds overnight, peel and blend into paste',
      'Warm a cup of milk with a few saffron strands',
      'Mix the almond paste and drink warm'
    ],
    efficacy: 5,
    time: '15 min',
    doshas: ['V', 'P']
  },
  {
    cat: 'brain-focus',
    icon: '🍯',
    bg: '#fff8e6',
    banner: '#D4930F',
    cat_label: 'Brain & Focus',
    title: 'Amla Honey Tonic',
    desc: 'Rich in antioxidants, supports cognitive function and vitality.',
    steps: [
      'Extract 1 tbsp fresh Amla (Indian gooseberry) juice',
      'Mix with 1 tsp raw honey',
      'Consume fresh every morning'
    ],
    efficacy: 4,
    time: '5 min',
    doshas: ['V', 'P', 'K']
  }
];