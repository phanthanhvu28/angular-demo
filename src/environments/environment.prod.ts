import { EnvironmentCore } from './environment.core';

export class Environment extends EnvironmentCore {
  constructor() {
    super();
    this.local = false;
    this.production = true;
    this.showError = true;
  }
}

export const environment = new Environment();
