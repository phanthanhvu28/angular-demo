export class ProcessFlowModel {
    username: string;
    email: string;
    generalStatus?: string;
    level?: number;
    isApprover?: boolean;
    selfStatus?: null;
    isComplete?: boolean;
    processActionAt?: string;
    nextActionDueDateAt?: string;
    roleDisplayName?: string;
    avatarUrl?: string;
  }
  export class ProcessFlowResponseModel {
    data: Array<ProcessFlowModel>;
    isError: boolean;
    statusCode: number;
    errorMessage: string | null;
    errorStack: string | null;
  }
  