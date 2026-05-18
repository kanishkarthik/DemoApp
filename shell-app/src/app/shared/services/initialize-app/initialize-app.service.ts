import { inject, Injectable } from "@angular/core";
import { AppConfig } from "../../models/app.config";
import { RuntimeConfigService } from "../config/runtime-config.service";
import { environment } from "../../../../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class InitializeAppService {
    constructor(private configService: RuntimeConfigService) {
    }
    initialize(): Promise<void> {
        return new Promise<void>((resolve) => {
            alert(environment.production)
            const env = environment.production ? '.prod' : '';
            const configUrl = `./assets/environment_configurations/app-config${env}.json`;
            fetch(configUrl)
                .then(response => response.json())
                .then((data: AppConfig) => {
                    this.configService.setAppConfig(data);
                    resolve();
                });
        });
    }
}