import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { App } from './app';
import { inject } from '@angular/core';
import { RuntimeConfigService } from './shared/services/config/runtime-config.service';

export const routes: Routes = [
    {
        path: 'remotes/admins',
        loadChildren: () => {
            const configService = inject(RuntimeConfigService);
            return loadRemoteModule({
                type: 'module',
                remoteEntry: configService.getRemoteEntryUrl('admins'),
                exposedModule: './admin_routes'
            }).then(m => m.ADMIN_ROUTES);
        },
        data: { requiredPermission: 'view_admin', preload: true }
    },
    {
        path: 'remotes/accounts',
        loadChildren: () => {
            const configService = inject(RuntimeConfigService);
            return loadRemoteModule({
                type: 'module',
                remoteEntry: configService.getRemoteEntryUrl('accounts'),
                exposedModule: './account_routes'
            }).then(m => m.ACCOUNT_ROUTES);
        },
        data: { requiredPermission: 'view_accounts', preload: true }
    },
    {
        path: 'remotes/payments',
        loadChildren: () => {
            const configService = inject(RuntimeConfigService);
            return loadRemoteModule({
                type: 'module',
                remoteEntry: configService.getRemoteEntryUrl('payments'),
                exposedModule: './payment_routes'
            }).then(m => m.PAYMENT_ROUTES);
        },
        data: { requiredPermission: 'init_payments', preload: true }
    },
    {
        path: 'remotes/payment-mgmt',
        loadChildren: () => {
            const configService = inject(RuntimeConfigService);
            return loadRemoteModule({
                type: 'module',
                remoteEntry: configService.getRemoteEntryUrl('paymentMgmt'),
                exposedModule: './payment_mgmt_routes'
            }).then(m => m.PAYMENT_MGMT_ROUTES);
        },
        data: { requiredPermission: 'manage_payments', preload: true }
    }
];
