import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('../../presentation/pages/home/home.component'),
  },
  {
    path: 'clients',
    loadComponent: () =>
      import('../../presentation/pages/clients/clients.component'),
  },
  {
    path: 'client-details/:id',
    loadComponent: () =>
      import(
        '../../presentation/pages/clients/client-details/client-details.component'
      ),
  },

  {
    path: 'products',
    loadComponent: () =>
      import('../../presentation/pages/products/products.component'),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
