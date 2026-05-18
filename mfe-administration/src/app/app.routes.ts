import { Routes } from '@angular/router';
import { App } from './app';

export const ADMIN_ROUTES: Routes = [
    {
        path: '',
        component: App,
        pathMatch: 'full'
    }
];
