import { DropdownValue } from '../../models';
import { ActivityHistory, ExchangeRate, FilesContract } from './common.models';
import CostingAnnexData, { CostingData } from './costing-annex.model';

export interface DataFilterAnnex {
  supplier: Array<DropdownValue>;
  annexType: Array<DropdownValue>;
  opexCharge: Array<DropdownValue>;
  uoM: Array<DropdownValue>;
  currencies: Array<DropdownValue>;
  scopesOfWork: Array<string>;
}

export default interface AnnexData {
  id: string;
  status: string;
  getActivitiesHistory: Array<ActivityHistory>;
  approvalAt: string;
  supplierFullName: string;
  supplierShortName: string;
  supplierCode: string;
  validFrom: Date;
  validTo: Date;
  creditLimited: number;
  creditCurrency: string;
  creditTerm: number;
  unitTerm;
  exchangeRatesType: string;
  exchangeRates: ExchangeRate;
  getFiles: Array<FilesContract>;
  files: Array<FilesContract>;
  isWarning: boolean;
  billingCycle: Array<string>;
  contractNumber: string;
  trialContract: string;
  code: string;
  isOnBehalf: boolean;
  reason: string;
  opexFullName: string;
  opexUserName: string;
  onBehalfInformation: {
    onBehalfCurrency: string;
    onBehalfLimited: number | string;
    onBehalfTerm: number | string;
    onBehalfUnitTerm: string;
    billingCycle: Array<string>;
  };
  scopesOfWork: Array<'DT' | 'CC' | 'FM' | 'WH' | 'dt' | 'cc' | 'fm' | 'wh'>;
  annexType: string;
  annexTypeName: string;
  annexNumber: string;
  contractCode: string;
  getDomesticTransportation: {
    [key: string]: CostingAnnexData;
  };
  getFreightManagement: {
    [key: string]: CostingAnnexData;
  };
  getCustomsClearance: {
    [key: string]: CostingAnnexData;
  };
  getWarehouse: {
    [key: string]: CostingAnnexData;
  };
  domesticTransportation: { [key: string]: Array<CostingData> };
  freightManagement: { [key: string]: Array<CostingData> };
  customsClearance: { [key: string]: Array<CostingData> };
  warehouse: { [key: string]: Array<CostingData> };
}
export interface DataFilterAnnexSelectSupplier {
  contract: Array<DropdownValue>;
}
