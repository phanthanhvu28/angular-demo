import { DatePipe } from '@angular/common';
import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { NvSafeAny } from '@models/base/data.interface';
import { CompatibleValue } from 'ng-zorro-antd/core/time';
import {
  NzDatePickerComponent,
  NzRangePickerComponent
} from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-base-date-picker-range-new',
  templateUrl: './base-date-picker-range-new.component.html',
  styleUrls: ['./base-date-picker-range-new.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: BaseDatePickerRangeNewComponent
    }
  ]
})
export class BaseDatePickerRangeNewComponent implements ControlValueAccessor {
  @ViewChild('rangePicker') rangePicker: NzRangePickerComponent;
  @Input() ngModel: any;
  @Input() nvDisabled: string | boolean;
  @Input() nvAllowSelectCurrentDate: boolean = false;
  @Input() nvFormat: string = 'dd/MM/yyyy';
  @Input() nvPlaceHolder: Array<string> = ['Start date', 'End date'];
  @Input() nvInline: string | boolean;
  @Input() nvAllowClear: boolean = true;
  @Input() disabledLeftDate: (selectedDate: Date, date: Date) => boolean;
  @Input() disabledRightDate: (selectedDate: Date, date: Date) => boolean;
  @Input() disabledDate: (
    activeInput: 'left' | 'right',
    selectedDate: Array<Date>,
    date: Date
  ) => boolean;

  @Output() ngModelChange: EventEmitter<Array<string | Date>> =
    new EventEmitter<Array<string | Date>>();
  datePickerLeft: Date;
  datePickerRight: Date;
  onChangeFn: Function;
  onTouchedFn: Function;

  isDisabledDate(picker: NzDatePickerComponent, date: Date): boolean {
    const current = this.getCurrentDate();

    if (this.disabledDate) {
      return this.disabledDate(
        picker.datePickerService.activeInput,
        [this.datePickerLeft, this.datePickerRight],
        date
      );
    }
    if (picker.datePickerService.activeInput === 'left') {
      return this.nzDisableFuncDateLeft(this.datePickerRight, date, current);
    }
    if (picker.datePickerService.activeInput === 'right') {
      return this.nzDisableFuncDateRight(this.datePickerLeft, date, current);
    }
    return false;
  }
  nzDisableFuncDateLeft(
    datePickerRight: Date,
    date: Date,
    current: Date
  ): boolean {
    if (this.disabledLeftDate) {
      return this.disabledLeftDate(datePickerRight, date);
    }
    if (!datePickerRight) {
      return false;
    }
    const rightDate = new Date(datePickerRight);
    return rightDate.getTime() < date.getTime();
  }

  nzDisableFuncDateRight(
    datePickerLeft: Date,
    date: Date,
    current: Date
  ): boolean {
    if (this.disabledRightDate) {
      return this.disabledRightDate(datePickerLeft, date);
    }
    if (!datePickerLeft) {
      return date.getTime() < current.getTime();
    }
    const leftDate = new Date(datePickerLeft);

    return (
      date.getTime() < leftDate.getTime() ||
      (date.getTime() < current.getTime() &&
        date.getTime() !== leftDate.getTime())
    );
  }
  nzOnOpenChange(newState: boolean): void {
    if (newState) {
      if (!this.ngModel) {
        return;
      }
      this.datePickerLeft = this.ngModel[0];
      this.datePickerRight = this.ngModel[1];
      return;
    }

    if (this.datePickerLeft && this.datePickerRight) {
      const dataPipeTransform = (date: Date | string) =>
        new DatePipe('en-US').transform(date, 'yyyy/MM/dd');
      const newDate = [
        structuredClone(dataPipeTransform(this.datePickerLeft)),
        structuredClone(dataPipeTransform(this.datePickerRight))
      ];
      this.onTouchedFn();
      this.onChangeFn(newDate);
      this.ngModel = newDate;
    }

    this.datePickerLeft = undefined;
    this.datePickerRight = undefined;
  }

  onChangeRange(e, picker: NzDatePickerComponent): void {
    const pickerPartType = picker.datePickerService.activeInput;
    if (!e || !e?.length) {
      this.ngModel = undefined;
      this.datePickerLeft = undefined;
      this.datePickerRight = undefined;
      return;
    }
    const newDate: Array<Date> = e.map(
      (selectedDate) => new Date(selectedDate)
    );
    if (newDate.length === 0) {
      return;
    }
    if (pickerPartType === 'left') {
      this.datePickerLeft = newDate.at(0);
      return;
    }
    if (pickerPartType === 'right') {
      this.datePickerRight =
        newDate.length === 1 ? newDate.at(0) : newDate.at(1);

      return;
    }
  }
  writeValue(value: string): void {
    this.ngModel = value;
  }
  registerOnChange(fn: Function): void {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn: Function): void {
    this.onTouchedFn = fn;
  }
  setDisabledState(isDisabled: string | boolean): void {
    if (this.nvDisabled === '') {
      this.nvDisabled = true;
      return;
    }
    this.nvDisabled = isDisabled;
  }

  getCurrentDate(): Date {
    const currentDate = new Date();
    if (!this.nvAllowSelectCurrentDate) {
      return currentDate;
    }
    currentDate.setDate(currentDate.getDate() - 1);
    return currentDate;
  }
}
