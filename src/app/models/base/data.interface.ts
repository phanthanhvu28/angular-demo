export interface ListRequestModel {
    filters: Array<Filter>;
    sorts: Array<string>;
    page: number;
    pageSize: number;
    includes: Array<any>; // <<< This field is in updating...
  }
  
  export interface ListResponseModel<ITEMS, DATA = any> {
    items: ITEMS[] | [];
    data?: DATA;
    totalItems: number;
    page: number;
    pageSize: number;
    isError?: boolean;
    errorMessage?: any;
    errorCode?: number;
    errorStack?: any; // TODO: remove ??
  }
  
  export interface SingleResponseModel<DATA = any> {
    data?: DATA;
    isError: boolean;
    errorMessage: any;
    errorCode?: number;
    errorStack?: any; // TODO: remove ??
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
    ContainsAny = 'ContainsAny',
    Recently = 'Recently'
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
    | 'ContainsAny'
    | 'Recently';
  
  export interface Filter {
    fieldName: string;
    comparison: FilterComparison;
    fieldValue: string;
  }
  
  export type NvSafeAny = any;
  
  export type INvSizeInputType = 'medium' | 'small' | 'ssmall' | 'xs' | 'xsmall';
  