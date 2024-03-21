import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { NvValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-modal-decline-reason',
  templateUrl: './modal-decline-reason.component.html',
  styleUrls: ['./modal-decline-reason.component.less']
})
export class ModalDeclineReasonComponent implements OnChanges {
  @Input() isVisible: boolean = false;

  @Output() isVisibleChange: EventEmitter<boolean> = new EventEmitter();
  @Output() onConfirm: EventEmitter<string> = new EventEmitter();

  formGroup: FormGroup;
  errorMessage: string = '';
  readonly REASON_MAX_LENGTH: number = 300;
  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      declineReason: [
        '',
        [NvValidators.required, NvValidators.maxLength(this.REASON_MAX_LENGTH)]
      ]
    });
  }

  get declineReasonControl(): AbstractControl {
    return this.formGroup.controls.declineReason;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['isVisible']?.currentValue) {
      this.declineReasonControl.reset();
    }
  }

  onClickConfirmDecline(): void {
    if (this.declineReasonControl.errors) {
      this.declineReasonControl.markAsDirty();
      this.declineReasonControl.updateValueAndValidity();

      return;
    }

    this.onConfirm.emit(this.declineReasonControl.value);
    this.isVisibleChange.emit(false);
  }

  onClickCancelDecline(): void {
    this.isVisibleChange.emit(false);
  }

  onVisibleChange(value: boolean): void {
    this.isVisible = value;
    this.isVisibleChange.emit(value);
  }
}
