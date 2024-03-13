export interface ItemAction {
    itemId: string;
    processAction: number;
    reason?: string;
  }
  
  export interface UserActionRoleModel {
    isApprover?: boolean;
    isCreatere?: boolean;
    isEditer?: boolean;
    isViewer?: boolean;
    isViewerInProcess?: boolean;
  }
  