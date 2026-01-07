import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Twoway } from './components/twoway/twoway';
import { Signaldemo } from './components/signaldemo/signaldemo';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'twoway', component: Twoway },
  { path: 'signaldemo', component: Signaldemo },
];
