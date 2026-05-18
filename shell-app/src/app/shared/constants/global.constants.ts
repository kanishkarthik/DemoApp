import { InjectionToken } from "@angular/core";

export const SupportedLanguages = ['en-US', 'vi-VN'] as const;
export const DefaultLanguage: SupportedLanguage = 'en-US';
export type SupportedLanguage = typeof SupportedLanguages[number];
export const i18nAssetsPath = 'assets/i18n/';
