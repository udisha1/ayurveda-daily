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
  cat: 'hair',
  icon: '🌿',
  bg: '#e8f4e1',
  banner: '#6B8F47',
  cat_label: 'Hair Health',
  title: 'Amla Hair Mask',
  desc: 'Strengthens hair and reduces dandruff.',
  steps: [
    'Mix amla powder with water',
    'Apply evenly on scalp',
    'Leave for 30 minutes',
    'Rinse thoroughly'
  ],
  efficacy: 4,
  time: '30 min',
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
    cat: 'skin',
    icon: '🌸',
    bg: '#fff8e6',
    banner: '#D4930F',
    cat_label: 'Skin Health',
    title: 'Rice Water Toner',
    desc: 'Boosts skin radiance.',
    steps: [
      'Take a cup of rice and rinse well',
      'Put it in a jar or a bottle and add 2 cups of water',
      'Let it sit for a day',
      'Add the water in spray bottle and use as toner',
    ],
    efficacy: 5,
    time: '8 min',
    doshas: ['V', 'K']
  },
    {
    cat: 'skin',
    icon: '🌸',
    bg: '#fce8d5',
    banner: '#C4622D',
    cat_label: 'Skin Health',
    title: 'Roasted Turmeric & Honey Face Pack',
    desc: 'Brightens skin and reduces pigmentation.',
    steps: [
      'Dry roast turmeric powder until fragrant', 
      'Let it cool and mix with honey to form a paste',
      'Apply on face',
      'Leave for 20 minutes',
      'Rinse with warm water'
    ],
    efficacy: 5,
    time: '25 min',
    doshas: ['P', 'K']
  },

    {
    cat: 'skin',
    icon: '🌸',
    bg: '#fce8d5',
    banner: '#C4622D',
    cat_label: 'Skin Health',
    title: 'Rice flour pack',
    desc: 'Exfoliates and brightens skin.',
    steps: [
      'Mix rice flour with rose water to form a paste',
      'Apply on face',
      'Leave for 20 minutes',
      'Rinse with cold water while softly rubbing in circular motions'
    ],
    efficacy: 5,
    time: '25 min',
    doshas: ['P', 'K']
  },
   {
    cat: 'skin',
    icon: '🌸',
    bg: '#fce8d5',
    banner: '#C4622D',
    cat_label: 'Skin Health',
    title: 'Rose Water & Sandalwood Face Pack',
    desc: ' Soothes skin and reduces redness.',
    steps: [
      ' Mix sandalwood powder with rose water to form a paste',
      'Apply on face',
      'Leave for 20 minutes',
      'Rinse with cool water'
    ],
    efficacy: 4,
    time: '20 min',
    doshas: ['P', 'K']
  },
  {
    cat: 'joints',
    icon: '🦴',
    bg: '#e8f4e1',
    banner: '#6B8F47',
    cat_label: 'Joint Health',
    title: 'Flaxseeds & Turmeric Drink',
    desc: 'Reduces joint pain and improves health.',
    steps: [
      'Mix turmeric + milk',
      'Add flaxseeds powder',
      'Drink daily after meals'
    ],
    efficacy: 4,
    time: '5 min',
    doshas: ['P', 'K']
  },
  {
    cat: 'joints',
    icon: '🦴',
    bg: '#e8f4e1',
    banner: '#6B8F47',
    cat_label: 'Joint Health',
    title: 'Kongu Vathal (Dry Ginger) Drink',
    desc: 'Reduces joint pain and improves health.',
    steps: [
      'Mix dry ginger powder with warm water',
      'Add honey and lemon juice',
      'Drink daily after meals'
    ],
    efficacy: 4,
    time: '9 min',
    doshas: ['P', 'K']
  },
   {
    cat: 'joints',
    icon: '🦴',
    bg: '#e8f4e1',
    banner: '#6B8F47',
    cat_label: 'Joint Health',
    title: 'Kongu Vathal (Dry Ginger) Drink',
    desc: 'Reduces joint pain and improves health.',
    steps: [
      'Mix dry ginger powder with warm water',
      'Add honey and lemon juice',
      'Drink daily after meals'
    ],
    efficacy: 4,
    time: '9 min',
    doshas: ['P', 'K']
  },
  {
    cat: 'hair',
    icon: '💆',
    bg: '#e8f4e1',
    banner: '#6B8F47',
    cat_label: 'Hair Health',
    title: 'Fenugreek Hair Mask',
    desc: 'Prevents hair fall and softens hair.',
    steps: [
      'Take 2 tbsp fenugreek seeds and soak overnight',
      'Mix the soaked seeds into a paste',
      'Leave for 1 hour',
      'Wash'
    ],
    efficacy: 5,
    time: '15 min',
    doshas: ['V', 'P']
  },
  {
    cat: 'hair',
    icon: '💆',
    bg: '#e8f4e1',
    banner: '#6B8F47',
    cat_label: 'Hair Health',
    title: 'Aloevera & Coconut Oil Hair Mask',
    desc: 'Nourishes scalp and promotes hair growth.',
    steps: [
      'Mix fresh aloevera gel with coconut oil',
      'Massage into scalp',
      'Leave for 1 hour',
      'Wash'
    ],
    efficacy: 5,
    time: '15 min',
    doshas: ['V', 'P']
  },
  {
    cat: 'hair',
    icon: '💆',
    bg: '#e8f4e1',
    banner: '#6B8F47',
    cat_label: 'Hair Health',
    title: 'Curry Leaves & Coconut Oil Hair Mask',
    desc: 'Strengthens hair and prevents graying.',
    steps: [
      'Dry roast curry leaves and grind into powder',
      'Mix with coconut oil',
      'Massage into scalp',
      'Leave for 1 hour',
      'Wash'
    ],
    efficacy: 5,
    time: '15 min',
    doshas: ['V', 'P']
  },
  {
    cat: 'energy',
    icon: '⚡',
    bg: '#fff8e6',
    banner: '#D4930F',
    cat_label: 'Energy',
    title: 'Maca Root Energy Drink',
    desc: 'Boosts energy and stamina naturally.',
    steps: [
      'Mix maca root powder',
      'Add warm water or milk',
      'Add honey or maple syrup',
      'Drink in the morning or before workouts'
    ],
    efficacy: 5,
    time: '8 min',
    doshas: ['V', 'K']
  },
 {
    cat: 'sleep',
    icon: '🌙',
    bg: '#eae0f5',
    banner: '#5C3317',
    cat_label: 'Sleep',
    title: 'Saffron & Almond Sleep Elixir',
    desc: 'Promotes deep sleep and relaxation.',
    steps: [
      'Warm milk',
      'Add saffron',
      'Add almond powder and honey',
      'Drink before bed'
    ],
    efficacy: 5,
    time: '7 min',
    doshas: ['V']
  },
  {
    cat: 'immunity',
    icon: '🌟',
    bg: '#fef9e6',
    banner: '#D4930F',
    cat_label: 'Immunity',
    title: 'Yogurt & Turmeric Immunity Booster',
    desc: 'Supports gut health and immunity.',
    steps: [
      'Mix yogurt with turmeric',
      'Add a pinch of black pepper',
      'Add honey and lemon juice',
      'Eat daily as a snack or with meals'
    ],
    efficacy: 3,
    time: '10 min',
    doshas: ['V', 'K']
  },
  {
    cat: 'stress',
    icon: '🌿',
    bg: '#e8f4e1',
    banner: '#2D5A27',
    cat_label: 'Stress & Anxiety',
    title: 'Holy Basil (Tulsi) Tea',
    desc: 'The sacred herb that calms the mind and reduces stress.',
    steps: [
      'Boil water with fresh or dried tulsi leaves',  
      'Add a slice of ginger and a pinch of black pepper',
      'Simmer for 10 minutes, strain well',
      'Sip slowly in the evening or before bed'
    ],
    efficacy: 4,
    time: '10 min',
    doshas: ['V', 'K']
  },
  {
    cat: 'stress',
    icon: '🌿',
    bg: '#e8f4e1',
    banner: '#2D5A27',
    cat_label: 'Stress & Anxiety',
    title: 'Jasmine & Chamomile Relaxation Tea',
    desc: 'A soothing blend that eases anxiety and promotes restful sleep.',
    steps: [
      'Boil water and add jasmine flowers and chamomile',
      'Add a pinch of cardamom for extra relaxation',
      'Simmer for 7 minutes, strain well',
      'Sip slowly in the evening or before bed'
    ],
    efficacy: 4,
    time: '10 min',
    doshas: ['V', 'K']
  },
  {
    cat: 'stress',
    icon: '🌿',
    bg: '#e8f4e1',
    banner: '#2D5A27',
    cat_label: 'Stress & Anxiety',
    title: 'Brahmi (Gotu Kola) Brain Tonic',
    desc: 'The brain tonic that enhances mental clarity and reduces stress.',
    steps: [
      'Boil water and add fresh or dried brahmi leaves',
      'Add a pinch of ashwagandha for extra stress relief',
      'Simmer for 10 minutes, strain well',
      'Sip slowly in the evening or before bed'
    ],
    efficacy: 5,
    time: '15 min',
    doshas: ['V', 'K']
  }
];

