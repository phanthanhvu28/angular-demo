import { DropdownValue } from '../../models';

export interface FilterUpload<T> {
  data?: T;
  isError: boolean;
  errorMessage: string;
  errorCode: number;
}

export interface DataFilterContract {
  customer: Array<DropdownValue>;
  typeExchangeRate: Array<DropdownValue>;
  typeOfDocument: Array<DropdownValue>;
  salesMan: Array<DropdownValue>;
  uoM: Array<DropdownValue>;
  currencies: Array<DropdownValue>;
}
export interface DataFilterAnnex {
  customer: Array<DropdownValue>;
  annexType: Array<DropdownValue>;
  salesMan: Array<DropdownValue>;
  uoM: Array<DropdownValue>;
  currencies: Array<DropdownValue>;
  scopesOfWork: Array<string>;
}
export interface DataFilterAnnexSelectCustomer {
  contract: Array<DropdownValue>;
  quotations: Array<{
    value: {
      quotationCode: string;
      scopesOfWork: Array<'dt' | 'cc' | 'fm' | 'wh'>;
    };
    label: string;
  }>;
}
export interface DataFilterAgreementSelectCustomer {
  quotations: Array<DropdownValue>;
}
export interface DataFilterTrialContractSelectCustomer {
  quotations: Array<DropdownValue>;
}
export interface DataFilterTrialContract {
  customer: Array<DropdownValue>;
  typeOfDocument: Array<DropdownValue>;
  salesMan: Array<DropdownValue>;
  uoM: Array<DropdownValue>;
  currencies: Array<DropdownValue>;
  typeExchangeRate: Array<string>;
}
export interface DataFilterAgreement {
  customer: Array<DropdownValue>;
  salesMan: Array<DropdownValue>;
  uoM: Array<DropdownValue>;
  currencies: Array<DropdownValue>;
  typeOfDocument: Array<DropdownValue>;
}
