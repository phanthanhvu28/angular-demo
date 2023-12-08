import { Injectable } from '@angular/core';

declare let window: any;

export type EnvName =
  | string
  | 'development'
  | 'test'
  | 'staging'
  | 'production'
  | 'docker'
  | 'intergrate';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor() {}

  async init() {
    window.config = await this.loadConfig(`app-setting.json`);
  }

  loadConfig(fileName: string) {
    return fetch(`assets/config/${fileName}`).then(function (response) {
      return response.json();
    });
  }
}

export function initConfig(config: ConfigService) {
  return () => config.init();
}
