import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'remotes/admins',
        loadChildren: () => {
            return loadRemoteModule({
                remoteEntry: 'http://localhost:4201/remoteEntry.js',
                remoteName: 'mfeAdmin',
                exposedModule: './admin_routes'
            }).then(m => m.ADMIN_ROUTES);
        }
    },
    {
        path: 'remotes/accounts',
        loadChildren: () => {
            return loadRemoteModule({
                remoteEntry: 'http://localhost:4202/remoteEntry.js',
                remoteName: 'mfeAccounts',
                exposedModule: './accounts'
            }).then(m => m.App);

        }
    },
    {
        path: 'remotes/payments',
        loadChildren: () => {
            return loadRemoteModule({
                remoteEntry: 'http://localhost:4203/remoteEntry.js',
                remoteName: 'mfePayments',
                exposedModule: './app'
            }).then(m => m.App);
        }
    },
    {
        path: 'remotes/payment-mgmt',
        loadChildren: () => {
            return loadRemoteModule({
                remoteEntry: 'http://localhost:4204/remoteEntry.js',
                remoteName: 'mfePaymentMgmt',
                exposedModule: './payment-mgmt'
            }).then(m => m.App);
        }
    }
];
