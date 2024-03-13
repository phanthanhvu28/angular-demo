export type StatusType =
  | string
  | 'Active'
  | 'Confirmed'
  | 'Submitted'
  | 'Done'
  | 'Approved'
  | 'New'
  | 'Amending'
  | 'Amended'
  | 'Inprogress'
  | 'Inactive'
  | 'Declined'
  | 'Decline'
  | 'Rejected'
  | 'Draft'
  | 'PendingApproval'
  | 'Pending Approval'
  | 'AmendingInternal'
  | 'Amending Internal'
  | 'Cancel'
  | 'Cancelled';

export enum StatusClassEnum {
  'Active' = 'nv-base-status-label--active',
  'Confirmed' = 'nv-base-status-label--active',
  'Submitted' = 'nv-base-status-label--active',
  'Contracted' = 'nv-base-status-label--active',
  'Done' = 'nv-base-status-label--active',
  'Approved' = 'nv-base-status-label--approved',
  'New' = 'nv-base-status-label--approved',
  'Amending' = 'nv-base-status-label--amending',
  'Amended' = 'nv-base-status-label--amended',
  'Inprogress' = 'nv-base-status-label--inprogress',
  'Verifying' = 'nv-base-status-label--inprogress',
  'RevisedExternal' = 'nv-base-status-label--inprogress',
  'Revised External' = 'nv-base-status-label--inprogress',
  'RevisedInternal' = 'nv-base-status-label--inprogress',
  'Revised Internal' = 'nv-base-status-label--inprogress',
  'Inactive' = 'nv-base-status-label--inactive',
  'Declined' = 'nv-base-status-label--decline',
  'Decline' = 'nv-base-status-label--decline',
  'Rejected' = 'nv-base-status-label--decline',
  'Draft' = 'nv-base-status-label--draft',
  'PendingApproval' = 'nv-base-status-label--pending-approval',
  'Pending Approval' = 'nv-base-status-label--pending-approval',
  'AmendingInternal' = 'nv-base-status-label--amending-internal',
  'Amending Internal' = 'nv-base-status-label--amending-internal',
  'AmendingExternal' = 'nv-base-status-label--amending-internal',
  'Amending External' = 'nv-base-status-label--amending-internal',
  'Cancel' = 'nv-base-status-label--decline',
  'Cancelled' = 'nv-base-status-label--decline'
}

export enum StatusEnum {
  'Active' = 'active',
  'Confirmed' = 'confirmed',
  'Submitted' = 'submitted',
  'Done' = 'done',
  'Approved' = 'approved',
  'New' = 'new',
  'Amending' = 'amending',
  'Amended' = 'amended',
  'Inprogress' = 'inprogress',
  'Inactive' = 'inactive',
  'Declined' = 'declined',
  'Decline' = 'decline',
  'Rejected' = 'declined',
  'Draft' = 'draft',
  'Pending Approval' = 'pending-approval',
  'PendingApproval' = 'pendingApproval',
  'Amending Internal' = 'amending-internal',
  'AmendingInternal' = 'amendingInternal',
  'Cancel' = 'cancel',
  'Cancelled' = 'Cancelled'
}
