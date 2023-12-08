declare const window: any;

export class EnvironmentProperty {
  local: boolean;
  production: boolean;

  showError: boolean;

  API_URL: EnvironmentApiProperty;
  CLIENT_ROOT: string;
  CLIENT_ID: string;
  IDP_AUTHORITY: string;

  constructor() {
    this.API_URL = new EnvironmentApiProperty();
    this.local = false;
    this.production = false;
    this.showError = false;
    this.CLIENT_ID = "";
    this.CLIENT_ROOT="";
    this.IDP_AUTHORITY="";    
  }
}

export class EnvironmentApiProperty {
  MASTER_DATA: EnvironmentApiGatewayProperty;
  COSTING: EnvironmentApiGatewayProperty;
  RFI: EnvironmentApiGatewayProperty;
  BOOKING: EnvironmentApiGatewayProperty;
  TARIFF: EnvironmentApiGatewayProperty;
  SHIPMENT: EnvironmentApiGatewayProperty;
  BILLING: EnvironmentApiGatewayProperty;
  CONTRACT: EnvironmentApiGatewayProperty;
  PNL: EnvironmentApiGatewayProperty;
  QUOTATION: EnvironmentApiGatewayProperty;
  constructor() {
    this.MASTER_DATA = new EnvironmentApiGatewayProperty();
    this.COSTING = new EnvironmentApiGatewayProperty();
    this.RFI = new EnvironmentApiGatewayProperty();
    this.BOOKING = new EnvironmentApiGatewayProperty();
    this.TARIFF = new EnvironmentApiGatewayProperty();
    this.SHIPMENT = new EnvironmentApiGatewayProperty();
    this.BILLING = new EnvironmentApiGatewayProperty();
    this.CONTRACT = new EnvironmentApiGatewayProperty();
    this.PNL = new EnvironmentApiGatewayProperty();
    this.QUOTATION = new EnvironmentApiGatewayProperty();
  }
}

export class EnvironmentApiGatewayProperty {
  BASE_URL: string;
  PREFIX: string;
  VERSION: string | null;

  constructor() {
    this.BASE_URL = "";
    this.PREFIX = "";
    this.VERSION = "";
  }
}

export class EnvironmentCore extends EnvironmentProperty {
  constructor() {
    super();
  }

  get config(): EnvironmentProperty {
    return window.config || this;
  }

  get baseUrl(): string {
    return this.config.API_URL.MASTER_DATA.BASE_URL;
  }

  get clientId(): string {
    return this.config.CLIENT_ID;
  }

  get idpAuthority(): string {
    return this.config.IDP_AUTHORITY;
  }

  get clientRoot(): string {
    return this.config.CLIENT_ROOT;
  }

  get baseUrlCosting(): string {
    return this.config.API_URL.COSTING.BASE_URL;
  }

  get baseUrlRFI(): string {
    return this.config.API_URL.RFI.BASE_URL;
  }

  get baseUrlPNL(): string {
    return this.config.API_URL.PNL.BASE_URL;
  }

  get baseUrlQuotation(): string {
    return this.config.API_URL.QUOTATION.BASE_URL;
  }

  get baseUrlTariff(): string {
    return this.config.API_URL.TARIFF.BASE_URL;
  }
}
