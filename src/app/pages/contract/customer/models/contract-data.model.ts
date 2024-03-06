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
  export interface AnnexData {
    id: string;
    code: string;
    annexNumber: string;
    salesManFullName: string;
    salesManUserName: string;
    customerFullName: string;
    customerShortName: string;
    customerCode: string;
    annexType: string;
    annexTypeName: string;
    quotationCode: string;
    scopesOfWork: Array<'DT' | 'CC' | 'FM' | 'WH'>;
    validFrom: Date;
    validTo: string;
    status: string;
    createBy: string;
    createAt: Date;
    approvalBy: string;
    approvalAt: Date;
    submitBy: string;
    submitAt: Date;
    rejectBy: Date;
    rejectAt: Date;
    step: number;
    isWarning: boolean;
    billingType: string;
    billing: Array<any>;
    onBehalfInformation: {
      onBehalfCurrency: string;
      onBehalfLimited: number | string;
      onBehalfTerm: number | string;
      onBehalfUnitTerm: string;
      billingCycle: Array<string>;
    };
    exchangeRates: string;
    getActivitiesHistory: Array<ActivityHistory>;
    getFiles: Array<FilesContract>;
    contractCode: string;
    reason: string;
    deposit: Deposit;
    prepaid: Deposit;
    bankGuarantee: Deposit;
    depositType: string;
    depositTypeName: string;
    isDeposit: boolean;
  }
  export interface BillingData {
    id: string;
    customerCode: string;
    companyTaxCode: string;
    companyFullName: string;
    companyEmailAddress: string;
    companyEnglishName: string;
    companyShortName: string;
    companyHeadOfficeAddress: string;
    companyBillingAddress: string;
    companyMaillingAddress: string;
    contactPersonWorkPhone: string;
    portalCreateAt: Date;
    portalCreateBy: string;
    website: string;
    status: string;
    annexCode: string;
    annexStatus: string;
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
  export interface Deposit {
    dueDate?: Date;
    validFrom?: Date;
    validTo?: Date;
    amount: number;
    currency: string;
    files: Array<FilesContract>;
    getFiles?: Array<FilesContract>;
  }
  