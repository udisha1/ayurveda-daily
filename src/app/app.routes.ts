import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { DoshasComponent } from './pages/doshas/doshas';
import { HerbsComponent } from './pages/herbs/herbs';
import { RemediesComponent } from './pages/remedies/remedies';
import { RoutineComponent } from './pages/routine/routine';
import { FaqComponent } from './pages/faq/faq';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'doshas', component: DoshasComponent },
  { path: 'herbs', component: HerbsComponent },
  { path: 'remedies', component: RemediesComponent },
  { path: 'routine', component: RoutineComponent },
  { path: 'faq', component: FaqComponent },
];