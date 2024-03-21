export interface ResultModel<T> {
    data: T | null;
    isError: boolean;
    errorMessage: any;
    errorCode: number;
    errorStack: any;
  }
  