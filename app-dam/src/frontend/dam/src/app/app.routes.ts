import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    canActivate: [authGuard]
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'dispositivos',
    loadComponent: () => import('./dispositivo/dispositivo.page').then( m => m.DispositivoPage),
    canActivate: [authGuard]
  },
  {
    path: 'dispositivos/:id',
    loadComponent: () => import('./dispositivo/dispositivo.page').then( m => m.DispositivoPage),
    canActivate: [authGuard]
  }
];
