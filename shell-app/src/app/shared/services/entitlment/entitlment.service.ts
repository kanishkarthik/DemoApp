import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class EntitlementService {
    hasPermission(perm: string): boolean {
        return perm == 'view_admin' || perm == 'view_accounts' || perm == 'init_payments' || perm == 'manage_payments';
    }
}