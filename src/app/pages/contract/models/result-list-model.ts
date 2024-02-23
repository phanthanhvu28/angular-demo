export interface ResultListModel<T> {
  items: T[] | [];
  data?: any;
  totalItems: number;
  page: number;
  pageSize: number;
  isError: boolean;
  errorMessage: any;
}
export interface ContractResponse<T> {
  data?: T;
  isError: boolean;
  errorMessage?: string;
}

export interface ResultDataAction {
  data?: any;
  isError: boolean;
  errorMessage: any;
  errorCode: number;
}
export interface DropdownValue {
  label: string;
  value: string;
}
export interface DropdownValueCustomer {
  label: string;
  value: {
    customerCode: string;
    customerShortName: string;
  };
}
export interface DropdownValueSupplier {
  label: string;
  value: {
    supplierCode: string;
    supplierShortName: string;
  };
}
export interface DropdownValueSupplier {
  label: string;
  value: {
    supplierCode: string;
    supplierShortName: string;
  };
}
