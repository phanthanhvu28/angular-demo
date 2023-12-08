import { NzTableSortFn } from 'ng-zorro-antd/table';
export interface TableDataCell {
    title?: string;
    key?: string;
    width?: string;
    colSpan?: number;
    rowSpan?: number;
    leftStick?: boolean | string;
    rightStick?: boolean | string;
    headerRenderClass?: string;
    cellRenderClass?: string;
    nzShowSort?: boolean;
    nzSortFn?: boolean | NzTableSortFn<any>;
    nzSortOrder?: string;
    sortOrder?: SortDirection;
    sortKey?: string;
    sortDirections?: string[];
    nzShowFilter?: boolean;
    isFiltering?: boolean;
    nvHidable?: boolean; // default is true
    isHidden?: boolean;
    nvShowTooltip?: boolean; // default is false
    formatRenderer?: any;
    filterConfigs?: FilterCellConfig;
  }
  export enum SortDirection {
    ascend = '',
    descend = 'Desc',
    null = 'null'
  }
  export interface FilterCellConfig {
    type: 'text' | 'number' | 'date' | 'selection' | 'range-date';
    comparison?: string;
    fieldValue?: FilterValue;
    required?: boolean;
    filterKey?: string;
    // only for Type === 'selection'
    isMulti?: boolean;
    selectionDataKey?: string;
    // only for Type === 'range-date'
    startRangeKey?: string;
    endRangeKey?: string;
  }
  export type FilterValue =
  | string
  | Array<string>
  | { start: string | number | Date; end: string | number | Date 
};
export interface TableNavConfig {
    nvShowSearch?: boolean;
    nvSearchPosition?: 'right' | 'left' | 'none';
    nvShowFilter?: boolean;
    nvShowDefaultFilter?: boolean;
    nvShowHideCols?: boolean;
    handleClickSearch?: (newState: string) => void;
    handleClickFilter?: (event: Event) => void;
  }

  export interface DataListRequestPayload {
    includes?: Array<string>;
    filters?: Array<any>;
    sorts?: Array<string>;
    page?: number;
    pageSize?: number;
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