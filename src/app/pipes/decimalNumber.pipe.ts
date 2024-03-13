import { Pipe, PipeTransform } from '@angular/core';
import { isNil } from 'ng-zorro-antd/core/util';

export class DecimalNumberOption {
  decimal: number = 0;
  minDecimal?: number = 0;
  suffix?: string = '';
  zeroIsEmpty?: boolean = false;
  isAbsNumber?: boolean = false;
  constructor(initialValue: DecimalNumberOption) {
    this.decimal = initialValue.decimal || 0;
    this.minDecimal = initialValue.minDecimal || 0;
    this.suffix = initialValue.suffix || '';
    this.zeroIsEmpty = !!initialValue.zeroIsEmpty;
    this.isAbsNumber = !!initialValue.isAbsNumber;
  }
}

/*
 * format number decimal
 * Usage:
 *   value | decimalNumber: decimal : suffix
 * Example:
 *   {{ 200000 | decimalNumber: '2' }}
 *   formats to: 200,000.00
 *   {{ 10 | decimalNumber: '2':'%' }}
 *   formats to: 10.00%
 */
@Pipe({ name: 'decimalNumber' })
export class DecimalNumberPipe implements PipeTransform {
  transform(value: number | string, options?: DecimalNumberOption): string {
    if (
      isNil(value) ||
      value === '' ||
      !!(value && value.toString().indexOf('.') === value.toString().length - 1)
    ) {
      return '-';
    }

    let validValue: number = value as number;
    if (value.toString().indexOf(',') > 0) {
      validValue = parseFloat(value.toString().replaceAll(',', ''));
    }

    if (isNaN(validValue)) {
      return value.toString();
    }

    const { decimal, zeroIsEmpty, suffix, minDecimal, isAbsNumber } =
      new DecimalNumberOption(options);

    if (!!zeroIsEmpty && !validValue) {
      return '-';
    }

    const number = isAbsNumber ? Math.abs(validValue) : validValue;
    if (isNaN(decimal) || (!isNaN(decimal) && decimal < 0)) {
      return number.toLocaleString();
    }

    return `${number.toLocaleString(undefined, {
      minimumFractionDigits: minDecimal,
      maximumFractionDigits: decimal
    })}${suffix}`;
  }
}
