import { Routes } from '@angular/router';
import { App } from './app';

export const PAYMENT_MGMT_ROUTES: Routes = [
    {
        path: '',
        component: App,
        pathMatch: 'full'
    }
];
