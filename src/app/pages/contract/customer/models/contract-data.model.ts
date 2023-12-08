export default interface ContractData {
    id: string;
    customerShortName: string;
    status: string;
    getActivitiesHistory: Array<ActivityHistory>;
    approvalAt: string;
    customerCode: string;
    customerFullName: string;
    salesManFullName: string;
    salesManUserName: string;
    validFrom: Date;
    validTo: Date;
    creditLimited: number;
    creditCurrency: string;
    creditTerm: number;
    unitTerm:number;
    exchangeRatesType: string;
    exchangeRates: ExchangeRate;
    getFiles: Array<FilesContract>;
    isWarning: boolean;
    billingCycle: Array<string>;
    contractNumber: string;
    trialContract: string;
    code: string;
    isCredit: boolean;
    reason: string;
  }
  export interface ActivityHistory {
    actionBy: string;
    actionDate: Date;
    actionEmail: string;
    fromStatus: string;
    toStatus: string;
    description: string;
    actionName: string;
    reason: string;
  }
  export interface ExchangeRate {
    currentRate: number;
    fromCurrency: string;
    toCurrency: string;
    updateDate: Date;
  }
  export interface FilesContract {
    uid: string;
    name: string;
    path: string;
    typeOfDocument: string;
    uploadBy: string;
    uploadDate: string;
    isDeleted: boolean;
    status: string | number;
    objectKey?: string;
  }
  