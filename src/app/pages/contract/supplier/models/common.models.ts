import { DropdownValue } from '../../models';

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
export interface ExchangeRate {
  currentRate: number;
  fromCurrency: string;
  toCurrency: string;
  updateDate: Date;
}
export interface FilterUpload<T> {
  data?: T;
  isError: boolean;
  errorMessage: string;
  errorCode: number;
}
export interface DataFilterTrialContractSelectCustomer {
  quotations: Array<DropdownValue>;
}
