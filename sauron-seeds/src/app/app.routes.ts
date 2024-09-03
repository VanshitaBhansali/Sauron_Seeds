import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./app-routing-module').then((m) => m.coreRoutes),
  },
]