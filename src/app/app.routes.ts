import { Routes } from '@angular/router';

export const routes: Routes = [

  { path: 'Student', loadChildren: () => import('./Student/students.routes').then(s => s.Studentroutes) },
  { path: 'Practice', loadChildren: () => import('./_Practice/Practice.routes').then(m => m.Practiceroutes) },
  { path: 'product', loadChildren: () => import('./Products/products.routes').then(p => p.productsroutes) },
  { path: '', redirectTo: 'Student', pathMatch: 'full' },
  { path: '**', redirectTo: 'Student' }
];