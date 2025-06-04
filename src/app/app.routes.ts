import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home').then(m => m.Home),
  },
  {
    path: 'privacy-policy',
    loadComponent: () => import('./privacy-policy/privacy-policy').then(m => m.PrivacyPolicy),
  },
  {
    path: 'contact',
    loadComponent: () => import('./contact/contact').then(m => m.Contact),
  },
  {
    path: 'user-agreement',
    loadComponent: () => import('./user-agreement/user-agreement').then(m => m.UserAgreement),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];
