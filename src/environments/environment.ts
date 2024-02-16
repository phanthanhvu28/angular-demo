// export const environment = {
//     production: false,
//     // baseUrl: 'https://localhost:7119',
//     baseUrl: 'http://localhost:5183',
//     // baseUrlCosting: 'https://localhost:7092',
//     baseUrlCosting: 'http://localhost:7092',
//     clientRoot: 'http://localhost:4200',
//     // idpAuthority: 'http://host.docker.internal:44310',
//     idpAuthority: 'http://localhost:44310',
//     clientId: 'opex-angular-app',
//   };
  

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