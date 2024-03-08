import { NvSafeAny } from '@models/base/data.interface';
import { DropdownValue } from '../../models';
import { BehaviorSubject } from 'rxjs';

export default interface CostingAnnexData {
  id?: string;
  formID?: string;
  warehouseId?: string;
  modeOfTransportCode?: string;
  modeOfTransportNameEN?: string;
  modeOfTransportNameVN?: string;
  countCostings: number;
  costings: Array<CostingsArray>;
  filters: Array<{
    keyFilter: string;
    valueFilter: Array<DropdownValue>;
  }>;
}
export interface CostingDataStatusInactive {
  chargeKey: string;
  formID: string;
  costId: string;
}

export interface CostingsArray {
  countGroup: number;
  data: Array<CostingData>;
  formID: string;
  warehouseId: string;
  modeOfTransportCode: string;
  modeOfTransportNameEN: string;
  modeOfTransportNameVN: string;
}
export interface CostingData {
  additionalRequest: string;
  airlineCarrierIATA: string;
  airlineCarrierICAO: string;
  airlineCarrierName: string;
  chargeCode: string;
  chargeNameEN: string;
  chargeNameVN: string;
  codeId: string;
  cost: number;
  createdBy: string;
  createdByFullName: string;
  createdDate: Date;
  currency: string;
  destinationAreaCode: string;
  destinationAreaNameEN: string;
  destinationAreaNameVN: string;
  destinationDistrictCode: string;
  destinationDistrictId: number;
  destinationDistrictNameEN: string;
  destinationDistrictNameVN: string;
  destinationPortCode: string;
  destinationPortId: number;
  destinationPortNameEN: string;
  destinationPortNameVN: string;
  destinationPortType: string;
  destinationProvinceCode: string;
  destinationProvinceNameEN: string;
  destinationProvinceNameVN: string;
  formID: string;
  isWarning: boolean;
  lastActivityDate: Date;
  lastUpdatedBy: string;
  lastUpdatedByFullName: string;
  lastUpdatedDate: Date;
  leadTime: string;
  modeOfTransportCode: string;
  modeOfTransportNameEN: string;
  modeOfTransportNameVN: string;
  originAreaCode: string;
  originAreaNameEN: string;
  originAreaNameVN: string;
  originDistrictCode: string;
  originDistrictId: number;
  originDistrictNameEN: string;
  originDistrictNameVN: string;
  originPortCode: string;
  originPortId: number;
  originPortNameEN: string;
  originPortNameVN: string;
  originPortType: string;
  originProvinceCode: string;
  originProvinceNameEN: string;
  originProvinceNameVN: string;
  railServiceType: string;
  remark: string;
  status: string;
  selected: boolean;
  submitBy: string;
  submitByFullName: string;
  supplierId: string;
  uoMOfTransportCode: string;
  uoMOfTransportNameEN: string;
  uoMOfTransportNameVN: string;
  validFrom: Date;
  validTo: Date;
  volumeRangePerMonthName: string;
  volumeRangePerMonthUoM: string;
  volumeRangePerUoMName: string;
  volumeRangePerUoMUoM: string;
}

export interface CommonCostingApi {
  [key: string]: {
    [key: string]: {
      costings: Array<CostingData>;
      countCostings: number;
    };
  };
}

export interface CommonCostingTable {
  [key: string]: {
    // key: serviceMainCharge | valueAddedServices | basicLocalCharges
    [key: string]: Array<CostingData>; // key: serviceMainCharge | valueAddedServices | basicLocalCharges
  };
}

export class CostingItemsCount {
  serviceMainCharges?: number = 0;
  valueAddedServices?: number = 0;
  basicLocalCharges?: number = 0;
  surcharges?: number = 0;

  readonly valueChanges: BehaviorSubject<CostingItemsCount> =
    new BehaviorSubject<CostingItemsCount>(null);

  setValue(initValue: CostingItemsCount): void {
    this.serviceMainCharges = initValue?.serviceMainCharges || 0;
    this.valueAddedServices = initValue?.valueAddedServices || 0;
    this.basicLocalCharges = initValue?.basicLocalCharges || 0;
    this.surcharges = initValue?.surcharges || 0;
    this.valueChanges.next(this);
  }

  patchValue(initValue: NvSafeAny): void {
    // console.log(initValue);

    this.serviceMainCharges =
      initValue?.serviceMainCharges || this.serviceMainCharges;
    this.valueAddedServices =
      initValue?.valueAddedServices || this.valueAddedServices;
    this.basicLocalCharges =
      initValue?.basicLocalCharges || this.basicLocalCharges;
    this.surcharges = initValue?.surcharges || this.surcharges;
    this.valueChanges.next(this);
  }
}
