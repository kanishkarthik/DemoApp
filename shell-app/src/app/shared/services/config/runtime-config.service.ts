import { Injectable } from "@angular/core";
import { AppConfig } from "../../models/app.config";

@Injectable({
    providedIn: 'root'
})
export class RuntimeConfigService {
    appConfig: AppConfig | null = null;

    setAppConfig(config: AppConfig) {
        this.appConfig = config;
    }

    getRemoteEntryUrl(remoteName: string): string  {
        if (!this.appConfig) {
            console.warn('AppConfig not set. Cannot get remote entry URL.');
            return '';
        }
        return this.appConfig.remotes[remoteName] || '' ;
    }
}