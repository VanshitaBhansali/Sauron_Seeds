import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Layout/layout/layout.component';

export const coreRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import(
            './pages/home/home.component').then((m) => m.HomeComponent),
      },
     {
        path: 'home',
        pathMatch: 'full',
        loadComponent: () =>
          import(
            './pages/home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'about',
        pathMatch: 'full',
        loadComponent: () =>
          import(
            './pages/about/about.component').then((m) => m.AboutComponent),
      },
      {
        path: 'product',
        pathMatch: 'full',
        loadComponent: () =>
          import(
            './pages/product/product.component').then((m) => m.ProductComponent),
      },
      {
        path: 'contact',
        pathMatch: 'full',
        loadComponent: () =>
          import(
            './pages/contact/contact.component').then((m) => m.ContactComponent),
    },
  ]
}
]
