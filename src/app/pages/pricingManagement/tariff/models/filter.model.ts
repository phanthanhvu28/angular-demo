export interface DTFilter {
    modeOfTransportCode: ItemFilter[];
    railServiceType: ItemFilter[];
    additionalRequest: ItemFilter[];
    currency: ItemFilter[];
    originProvinceCode: ItemFilter[];
    originDistrictId: ItemFilter[];
    destinationProvinceCode: ItemFilter[];
    destinationDistrictId: ItemFilter[];
    volumeRangePerMonthUoM: ItemFilter[];
    volumeRangePerMonthName: ItemFilter[];
    volumeRangePerUoMUoM: ItemFilter[];
    volumeRangePerUoMName: ItemFilter[];
    leadTime: ItemFilter[];
    status: ItemFilter[];
    carrier: ItemFilter[];
    originPort: ItemFilter[];
    destinationPort: ItemFilter[];
    uomTransport: ItemFilter[];
  }
  
  export interface DTFilterList {
    approvedBy: ItemFilter[];
    createBy: ItemFilter[];
    status: ItemFilter[];
  }
  
  export interface DTFilterListTransport extends DTFilterList {}
  
  // DT MAIN
  export interface FilterDTTransportationList {
    approvedBy: ItemOptions[];
    createBy: ItemOptions[];
    status: ItemOptions[];
  }
  export interface FilterDTTransportationDetail {
    modeOfTransportCode: ItemOptions[];
    railServiceType: ItemOptions[];
    airlineCarrierIATA: ItemOptions[];
    additionalRequest: ItemOptions[];
    leadTime: ItemOptions[];
    currency: ItemOptions[];
  
    originProvinceCode: ItemOptions[];
    originDistrictId: ItemOptions[];
    originPortCode: ItemOptions[];
    destinationProvinceCode: ItemOptions[];
    destinationDistrictId: ItemOptions[];
    destinationPortCode: ItemOptions[];
  
    volumeRangePerMonthUoM: ItemOptions[];
    volumeRangePerMonthName: ItemOptions[];
    volumeRangePerUoMUoM: ItemOptions[];
    volumeRangePerUoMName: ItemOptions[];
    uoMOfTransportCode: ItemOptions[];
  
    processAction: ItemOptions[];
  }
  
  // DT VAS
  export interface FilterDTVASList {
    approvedBy: ItemOptions[];
    createBy: ItemOptions[];
    status: ItemOptions[];
  }
  export interface FilterDTVASDetail {
    chargeCode: ItemOptions[];
    modeOfTransportCode: ItemOptions[];
    uoMOfVASCode: ItemOptions[];
    currency: ItemOptions[];
  
    processAction: ItemOptions[];
  }
  
  // DT BLC
  export interface FilterDTBLCList {
    approvedBy: ItemOptions[];
    createBy: ItemOptions[];
    status: ItemOptions[];
  }
  export interface FilterDTBLCDetail {
    chargeCode: ItemOptions[];
    modeOfTransportCode: ItemOptions[];
    uoMOfTransportCode: ItemOptions[];
    currency: ItemOptions[];
  
    processAction: ItemOptions[];
  }
  
  // FM MAIN
  export interface FilterFMTransportationList {
    approvedBy: ItemOptions[];
    createBy: ItemOptions[];
    status: ItemOptions[];
  }
  export interface FilterFMTransportationDetail {
    serviceType: ItemOptions[];
    serviceLevel: ItemOptions[];
    carrierCode: ItemOptions[];
    frequencyOfSchedule: ItemOptions[];
    specification: ItemOptions[];
    commodityHandling: ItemOptions[];
    transitTime: ItemOptions[];
    currency: ItemOptions[];
  
    originCountryCode: ItemOptions[];
    originPortCode: ItemOptions[];
    destinationCountryCode: ItemOptions[];
    destinationPortCode: ItemOptions[];
  
    volumeRangePerUoMName: ItemOptions[];
    volumeRangePerMonthName: ItemOptions[];
    volumeRangePerUoMUoM: ItemOptions[];
    volumeRangePerMonthUoM: ItemOptions[];
    uoMOfTransportCode: ItemOptions[];
    ratioOfUoMRates: ItemOptions[];
  
    processAction: ItemOptions[];
  }
  // FM VAS
  export interface FilterFMVASList {
    approvedBy: ItemOptions[];
    createBy: ItemOptions[];
    status: ItemOptions[];
  }
  export interface FilterFMVASDetail {
    chargeCode: ItemOptions[];
    modeOfTransportCode: ItemOptions[];
    serviceType: ItemOptions[];
  
    originCountryCode: ItemOptions[];
    originStateAreaCode: ItemOptions[];
    originCityProvinceCode: ItemOptions[];
    originPortCode: ItemOptions[];
    originZipCode: ItemOptions[];
  
    destinationCountryCode: ItemOptions[];
    destinationStateAreaCode: ItemOptions[];
    destinationCityProvinceCode: ItemOptions[];
    destinationPortCode: ItemOptions[];
    destinationZipCode: ItemOptions[];
  
    place: ItemOptions[];
    uoMOfTransportCode: ItemOptions[];
    specification: ItemOptions[];
    uoMOfVASCode: ItemOptions[];
    currency: ItemOptions[];
  
    processAction: ItemOptions[];
  }
  // FM SC
  export interface FilterFMSCList {
    approvedBy: ItemOptions[];
    createBy: ItemOptions[];
    status: ItemOptions[];
  }
  export interface FilterFMSCDetail {
    chargeCode: ItemOptions[];
    modeOfTransportCode: ItemOptions[];
    serviceType: ItemOptions[];
  
    originCountryCode: ItemOptions[];
    originPortCode: ItemOptions[];
  
    destinationCountryCode: ItemOptions[];
    destinationPortCode: ItemOptions[];
  
    carrierCode: ItemOptions[];
    uoMOfTransportCode: ItemOptions[];
    specification: ItemOptions[];
    uoMOfSurchargeCode: ItemOptions[];
    ratioOfUoMRates: ItemOptions[];
    currency: ItemOptions[];
  
    processAction: ItemOptions[];
  }
  // FM BLC
  export interface FilterFMBLCList {
    approvedBy: ItemOptions[];
    createBy: ItemOptions[];
    status: ItemOptions[];
  }
  export interface FilterFMBLCDetail {
    chargeCode: ItemOptions[];
    modeOfTransportCode: ItemOptions[];
    serviceType: ItemOptions[];
  
    originCountryCode: ItemOptions[];
    originPortCode: ItemOptions[];
  
    destinationCountryCode: ItemOptions[];
    destinationPortCode: ItemOptions[];
  
    uoMOfTransportCode: ItemOptions[];
    specification: ItemOptions[];
    uoMOfBLCCode: ItemOptions[];
    currency: ItemOptions[];
  
    processAction: ItemOptions[];
  }
  
  // CC MAIN
  export interface FilterCCTransportationList {
    approvedBy: ItemOptions[];
    createBy: ItemOptions[];
    status: ItemOptions[];
  }
  export interface FilterCCTransportationDetail {
    modeOfTransportCode: ItemOptions[];
    typeOfCC: ItemOptions[];
    serviceType: ItemOptions[];
    serviceLevel: ItemOptions[];
    commodity: ItemOptions[];
    currency: ItemOptions[];
  
    portCode: ItemOptions[];
    customsDeptCode: ItemOptions[];
  
    uoMOfCustomsDeclarationFee: ItemOptions[];
    volumeRangePerMonthName: ItemOptions[];
    uoMOfTransportCode: ItemOptions[];
  
    processAction: ItemOptions[];
  }
  // CC VAS
  export interface FilterCCVASList {
    approvedBy: ItemOptions[];
    createBy: ItemOptions[];
    status: ItemOptions[];
  }
  export interface FilterCCVASDetail {
    chargeCode: ItemOptions[];
    modeOfTransportCode: ItemOptions[];
    typeOfCC: ItemOptions[];
    commodity: ItemOptions[];
  
    portCode: ItemOptions[];
    customsDeptCode: ItemOptions[];
  
    serviceType: ItemOptions[];
    serviceLevel: ItemOptions[];
    uoMOfTransportCode: ItemOptions[];
    uoMOfVASCode: ItemOptions[];
    currency: ItemOptions[];
  
    processAction: ItemOptions[];
  }
  
  // WH MAIN
  export interface FilterWHTransportationList {
    approvedBy: ItemOptions[];
    createBy: ItemOptions[];
    status: ItemOptions[];
  }
  export interface FilterWHTransportationDetail {
    warehouseId: ItemOptions[];
    typeOfWarehouse: ItemOptions[];
    specification: ItemOptions[];
    chargeCode: ItemOptions[];
    locationProvinceCode: ItemOptions[];
    locationDistrictId: ItemOptions[];
    storageHandling: ItemOptions[];
    volumeRangePerMonthUoM: ItemOptions[];
    volumeRangePerMonthName: ItemOptions[];
    currency: ItemOptions[];
  
    processAction: ItemOptions[];
  }
  // WH VAS
  export interface FilterWHVASList {
    approvedBy: ItemOptions[];
    createBy: ItemOptions[];
    status: ItemOptions[];
  }
  export interface FilterWHVASDetail {
    warehouseId: ItemOptions[];
    typeOfWarehouse: ItemOptions[];
    chargeCode: ItemOptions[];
    locationProvinceCode: ItemOptions[];
    locationDistrictId: ItemOptions[];
    specification: ItemOptions[];
    vasChargeCondition: ItemOptions[];
    volumeRangePerMonthUoM: ItemOptions[];
    volumeRangePerMonthName: ItemOptions[];
    mincharge: ItemOptions[];
    unitOfMincharge: ItemOptions[];
    currency: ItemOptions[];
  
    processAction: ItemOptions[];
  }
  
  export interface ItemOptions {
    label: string;
    value: string;
    parentValue?: string;
  }
  
  export enum FilterComparison {
    Equal = '==',
    NotEqual = '!=',
    Bigger = '>',
    BiggerOrEqual = '>=',
    Smaller = '<',
    SmallerOrEqual = '<=',
    Contains = 'Contains',
    StartsWith = 'StartsWith',
    EndsWith = 'EndsWith',
    In = 'In',
    ContainsAny = 'ContainsAny'
  }
  
  export type FilterComparisonType =
    | 'Equal'
    | 'NotEqual'
    | 'Bigger'
    | 'BiggerOrEqual'
    | 'Smaller'
    | 'SmallerOrEqual'
    | 'Contains'
    | 'StartsWith'
    | 'EndsWith'
    | 'In'
    | 'ContainsAny';
  
  export interface TariffFilter {
    fieldName: string;
    comparison: FilterComparison;
    fieldValue: string;
  }
  
  export interface ItemFilter {
    label: string;
    value: string;
    // TODO: remove code and name when remove page tariff DT temp
    code?: string;
    name?: string;
  }
  