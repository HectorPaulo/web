import { Routes } from '@angular/router';
import { GridPagesComponent } from './pages/grid-pages/grid-pages.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    {
    path: '',
    component: GridPagesComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];
