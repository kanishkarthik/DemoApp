import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { App } from './app';

export const routes: Routes = [  
    {
        path: 'remotes/admins',
        loadChildren: () => {
            return loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:4201/remoteEntry.js',
                exposedModule: './admin_routes'
            }).then(m => m.ADMIN_ROUTES);
        }
    },
    {
        path: 'remotes/accounts',
        loadChildren: () => {
            return loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:4202/remoteEntry.js',
                exposedModule: './account_routes'
            }).then(m => m.ACCOUNT_ROUTES);

        }
    },
    {
        path: 'remotes/payments',
        loadChildren: () => {
            return loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:4203/remoteEntry.js',
                exposedModule: './payment_routes'
            }).then(m => m.PAYMENT_ROUTES);
        }
    },
    {
        path: 'remotes/payment-mgmt',

        loadChildren: () => {
            return loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:4204/remoteEntry.js',
                exposedModule: './payment_mgmt_routes'
            }).then(m => m.PAYMENT_MGMT_ROUTES);
        }
    }
];
