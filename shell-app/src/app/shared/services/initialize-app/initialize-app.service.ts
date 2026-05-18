import { inject, Injectable } from "@angular/core";
import { AppConfig } from "../../models/app.config";
import { RuntimeConfigService } from "../config/runtime-config.service";
import { environment } from "../../../../environments/environment";
import { TranslationService } from "../translation/translation.service";

@Injectable({
    providedIn: 'root'
})
export class InitializeAppService {
    constructor(
        private configService: RuntimeConfigService,
        private translationService: TranslationService
    ) {
    }
    async initialize(): Promise<void> {
        await this.configService.load();
        await this.translationService.initialize();
    }
}