import { Injectable } from "@angular/core";
import { AppConfig } from "../../models/app.config";
import { environment } from "../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class RuntimeConfigService {
    appConfig: AppConfig = {
        apiBaseUrl: '',
        baseUrl: '',
        remotes: {}
    } as AppConfig;    

    load(): Promise<void> {
        return new Promise<void>((resolve) => {
            const env = environment.production ? '.prod' : '';
            const configUrl = `./assets/environment_configurations/app-config${env}.json`;
            fetch(configUrl)
                .then(response => response.json())
                .then((data: AppConfig) => {
                    this.setAppConfig(data);
                    resolve();
                });
        });
    }

    setAppConfig(config: AppConfig) {
        this.appConfig = config;
    }

    getRemoteEntryUrl(remoteName: string): string {
        if (!this.appConfig) {
            console.warn('AppConfig not set. Cannot get remote entry URL.');
            return '';
        }
        return this.appConfig.remotes[remoteName] || '';
    }
}