import { ProcessFlowModel } from './process-flow.model';

export interface ResultListModel<T> {
  items: T[] | [];
  data?: any;
  totalItems: number;
  page: number;
  pageSize: number;
  isError: boolean;
  errorMessage: any;
}

export interface TariffDraftResponse {
  data?: any;
  isError: boolean;
  errorMessage?: string;
}
export interface NewTariffDataModel {
  tariffId: string;
  validFrom: string;
  validTo: string;
  hasTariffActive: boolean;
  aggregateCount: AggregateCount;
}
export interface AggregateCount {
  NewestItems: number;
  ChangedMarkups: number;
  ChangedAvgCosts: number;
  ChangedBothAvgCostMarkup: number;
  ConstantItems: number;
}

export interface TariffDetailResponse<T> {
  items: Array<T>;
  data?: TariffDetailResponseData;
  totalItems: number;
  page: number;
  pageSize: number;
  isError: boolean;
  errorMessage: any;
}

export interface TariffDetailResponseData {
  tariffId: number;
  status: string;
  processFlows: Array<ProcessFlowModel>;
  validFrom: string | Date;
  validTo: string | Date;
  inspector: {
    rejectReason: string;
    levelResetRejected: number;
    user: ProcessFlowModel;
    status: string;
  };
  levelResetRejected: number;
  tariffCode: string;
  aggregateCount: AggregateCount;
}
