import { DropdownValue } from '../../models';
import { ActivityHistory, ExchangeRate, FilesContract } from './common.models';

export default interface ContractData {
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
  exchangeRatesName: string;
  exchangeRates: ExchangeRate;
  getFiles: Array<FilesContract>;
  isWarning: boolean;
  billingCycle: Array<string>;
  contractNumber: string;
  trialContract: string;
  code: string;
  isCredit: boolean;
  reason: string;
  opexFullName: string;
  opexUserName: string;
}

export interface DataFilterContract {
  supplier: Array<DropdownValue>;
  typeExchangeRate: Array<DropdownValue>;
  typeOfDocument: Array<DropdownValue>;
  opexInCharge: Array<DropdownValue>;
  uoM: Array<DropdownValue>;
  currencies: Array<DropdownValue>;
}
