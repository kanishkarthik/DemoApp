import { Injectable } from "@angular/core";
import { PreloadingStrategy, Route } from "@angular/router";
import { EMPTY, Observable } from "rxjs";
import { EntitlementService } from "../entitlment/entitlment.service";

@Injectable({
    providedIn: 'root'
})
export class EntitlementAwarePreloadStrategy implements PreloadingStrategy {
    constructor(private entitlements: EntitlementService) { }
    preload(route: Route, load: () => Observable<any>): Observable<any> {
        const perm = route.data?.['requiredPermission'];
        const preload = route.data?.['preload'];
        if (preload && (!perm || (perm && this.entitlements.hasPermission(perm)))) {
            return load();
        }
        return EMPTY;
    }
}