import { Component, Input } from '@angular/core';
import { StatusClassEnum, StatusType } from './base-status-label.const';

@Component({
  selector: 'app-base-status-label',
  templateUrl: './base-status-label.component.html',
  styleUrls: ['./base-status-label.component.less']
})
export class BaseStatusLabelComponent {
  @Input() status: StatusType;
  @Input() custom?: {
    text?: string;
    className: string;
  };
  @Input() nvMaxWidthClass: string = '';

  classStatus = StatusClassEnum;

  classText: Object = {
    Active: 'Active',
    Confirmed: 'Confirmed',
    Submitted: 'Submitted',
    Contracted: 'Contracted',
    Done: 'Done',
    Approved: 'Approved',
    New: 'New',
    Amending: 'Amending',
    Amended: 'Amended',
    Inprogress: 'Inprogress',
    Verifying: 'Verifying',
    RevisedExternal: 'Revised External',
    'Revised External': 'Revised External',
    RevisedInternal: 'Revised Internal',
    'Revised Internal': 'Revised Internal',
    Inactive: 'Inactive',
    Declined: 'Declined',
    Decline: 'Decline',
    Rejected: 'Rejected',
    Draft: 'Draft',
    PendingApproval: 'Pending Approval',
    'Pending Approval': 'Pending Approval',
    AmendingInternal: 'Amending Internal',
    'Amending Internal': 'Amending Internal',
    AmendingExternal: 'Amending External',
    'Amending External': 'Amending External',
    Cancel: 'Cancel'
  };
}
