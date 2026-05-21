import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about';
import { ContentPageComponent, ContentPageData } from './pages/content-page/content-page';
import { DoshasComponent } from './pages/doshas/doshas';
import { HerbsComponent } from './pages/herbs/herbs';
import { HomeComponent } from './pages/home/home';
import { RemediesComponent } from './pages/remedies/remedies';
import { RoutineComponent } from './pages/routine/routine';

const tipsPage: ContentPageData = {
  eyebrow: 'Daily Tips',
  title: 'Simple daily Ayurveda tips that fit real life',
  description:
    'Build steadier energy with practical rituals you can start today, without overhauling your entire routine.',
  cards: [
    {
      title: 'Start warm',
      body: 'Begin the day with warm water or ginger tea to gently wake up digestion before breakfast.',
    },
    {
      title: 'Eat with rhythm',
      body: 'Keep meals at consistent times so your body can settle into a calmer digestive cycle.',
    },
    {
      title: 'Pause before bed',
      body: 'Trade late-night scrolling for a shorter wind-down with breathwork, herbal tea, or light stretching.',
    },
  ],
  ctaLabel: 'Take the dosha test',
  ctaLink: '/dosha-test',
};

const recipesPage: ContentPageData = {
  eyebrow: 'Recipes',
  title: 'Seasonal recipes for a lighter, calmer kitchen',
  description:
    'Explore simple meals inspired by Ayurvedic principles, from grounding breakfasts to soothing evening bowls.',
  cards: [
    {
      title: 'Breakfast ideas',
      body: 'Try stewed fruit, spiced oats, or warm porridges that are gentle on the stomach and easy to repeat.',
    },
    {
      title: 'Lunch focus',
      body: 'Make lunch your most nourishing meal with hearty grains, cooked vegetables, and fresh herbs.',
    },
    {
      title: 'Evening reset',
      body: 'Keep dinner simple with soups, khichdi, and warm one-pot meals that support rest instead of heaviness.',
    },
  ],
  ctaLabel: 'Read daily tips',
  ctaLink: '/tips',
};

const contactPage: ContentPageData = {
  eyebrow: 'Contact',
  title: 'Talk with the Ayurveda Daily team',
  description:
    'Reach out for partnerships, editorial questions, or general feedback about the site and its wellness resources.',
  cards: [
    {
      title: 'Editorial questions',
      body: 'Share ideas, corrections, or suggestions if you spotted anything we can make clearer for readers.',
    },
    {
      title: 'Partnerships',
      body: 'If you would like to collaborate on thoughtful wellness content, we would love to hear from you.',
    },
    {
      title: 'General support',
      body: 'Questions about articles, quizzes, or navigation are welcome. We aim to keep the experience simple and useful.',
    },
  ],
};

const privacyPage: ContentPageData = {
  eyebrow: 'Privacy Policy',
  title: 'How we handle your information',
  description:
    'We keep data collection minimal, use information only to improve the experience, and respect unsubscribe requests promptly.',
  cards: [
    {
      title: 'Newsletter data',
      body: 'Email addresses collected for newsletters are used only for subscription-related communication and updates.',
    },
    {
      title: 'Analytics',
      body: 'Basic usage information may be collected to understand which pages help readers most and where the site can improve.',
    },
    {
      title: 'Your control',
      body: 'You can opt out of marketing emails at any time, and we avoid asking for unnecessary personal information.',
    },
  ],
};

const termsPage: ContentPageData = {
  eyebrow: 'Terms of Service',
  title: 'A clear, reader-friendly use policy',
  description:
    'The site is intended for educational use, not as a substitute for professional medical diagnosis or treatment.',
  cards: [
    {
      title: 'Informational content',
      body: 'Articles, quizzes, and recipe ideas are shared for educational purposes and should not replace licensed medical care.',
    },
    {
      title: 'Responsible use',
      body: 'Please use wellness guidance thoughtfully and speak with a qualified professional before major health decisions.',
    },
    {
      title: 'Content updates',
      body: 'We may revise pages over time to keep information more useful, accurate, and current for readers.',
    },
  ],
};

const blogPage: ContentPageData = {
  eyebrow: 'Blog',
  title: 'Stories, notes, and deeper wellness reads',
  description:
    'Browse longer-form reflections on seasonal living, ingredient spotlights, and practical ways to make Ayurveda feel approachable.',
  cards: [
    {
      title: 'Seasonal reflections',
      body: 'Learn how weather, routine, and food choices interact through the lens of Ayurvedic balance.',
    },
    {
      title: 'Ingredient spotlights',
      body: 'Discover familiar kitchen staples and herbs with simple context for how they are traditionally used.',
    },
    {
      title: 'Modern routines',
      body: 'Find grounded adaptations of classic practices that can fit busy schedules without feeling rigid.',
    },
  ],
  ctaLabel: 'Explore recipes',
  ctaLink: '/recipes',
};

const loginPage: ContentPageData = {
  eyebrow: 'Login',
  title: 'Your member area is on the way',
  description:
    'The account experience is still being prepared, but you can already explore the site, read guides, and subscribe for updates.',
  cards: [
    {
      title: 'Save favorites',
      body: 'Future member features will make it easier to bookmark routines, recipes, and herbs in one place.',
    },
    {
      title: 'Track progress',
      body: 'We are planning a smoother way to revisit quizzes and keep up with new personalized recommendations.',
    },
    {
      title: 'Stay in the loop',
      body: 'Until then, the newsletter is the best way to hear about new content and upcoming features.',
    },
  ],
  ctaLabel: 'Go home',
  ctaLink: '/',
};

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tips', component: ContentPageComponent, data: tipsPage },
  { path: 'recipes', component: ContentPageComponent, data: recipesPage },
  { path: 'dosha-test', component: DoshasComponent },
  { path: 'contact', component: ContentPageComponent, data: contactPage },
  { path: 'privacy', component: ContentPageComponent, data: privacyPage },
  { path: 'terms', component: ContentPageComponent, data: termsPage },
  { path: 'blog', component: ContentPageComponent, data: blogPage },
  { path: 'login', component: ContentPageComponent, data: loginPage },
  { path: 'doshas', redirectTo: 'dosha-test', pathMatch: 'full' },
  { path: 'herbs', component: HerbsComponent },
  { path: 'remedies', component: RemediesComponent },
  { path: 'routine', component: RoutineComponent },
  { path: '**', redirectTo: '' },
];
