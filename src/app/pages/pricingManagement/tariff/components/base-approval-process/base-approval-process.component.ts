import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface ProcessFlowItem {
  avatarUrl: string;
  name: string;
  status?:
    | string
    | 'Submitted'
    | 'Waiting'
    | 'Assigned'
    | 'Approved'
    | 'Rejected'
    | 'Declined'
    | 'Amending'
    | 'Revoked';
  role: string;
  date?: string;
  isComplete?: boolean;
}

@Component({
  selector: 'app-base-approval-process',
  templateUrl: './base-approval-process.component.html',
  styleUrls: ['./base-approval-process.component.less']
})
export class BaseApprovalProcessComponent implements OnInit {
  @Input() title: string = 'Approval Process';
  @Input() list: Array<ProcessFlowItem> = [];
  @Input() openFull: boolean = false;

  @Output() onTogglePanel: EventEmitter<boolean> = new EventEmitter<boolean>();

  classStatus: Object = {
    Submitted: 'nv-text-green-400',
    Waiting: 'nv-text-yellow-400',
    Assigned: 'nv-text-orange-400',
    Approved: 'nv-text-blue-400',
    Rejected: 'nv-text-red-400',
    Declined: 'nv-text-red-400',
    Amending: 'nv-text-orange-400',
    Revoked: 'nv-text-neutral-300'
  };
  classText: Object = {
    Submitted: 'Submitted',
    Waiting: 'Waiting',
    Assigned: 'Assigned',
    Approved: 'Approved',
    Rejected: 'Rejected',
    Declined: 'Declined',
    Amending: 'Amending',
    Revoked: 'Revoked'
  };
  isOpenFull: boolean = false;

  ngOnInit() {
    this.isOpenFull = this.openFull;
  }

  toggleOpenFull() {
    this.isOpenFull = !this.isOpenFull;
    this.onTogglePanel.emit(this.isOpenFull);
  }
}
