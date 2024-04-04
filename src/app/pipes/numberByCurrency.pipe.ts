import { Pipe, PipeTransform } from '@angular/core';
import { isNil } from 'ng-zorro-antd/core/util';
enum DecimalOfCurrencyCode {
  AUD = 2,
  CAD = 2,
  CHF = 2,
  CNY = 1,
  DKK = 2,
  EUR = 2,
  GBP = 2,
  HKD = 2,
  INR = 2,
  JPY = 2,
  KRW = 2,
  MYR = 2,
  KWD = 3,
  NOK = 2,
  RUB = 2,
  SAR = 2,
  SEK = 2,
  SGD = 2,
  THB = 2,
  USD = 2,
  KHR = 2,
  VND = 0
}

/*
 * format number decimal by currency
 * Usage:
 *   value | numberCurrency: currency code
 * Example:
 *   {{ 200000 | numberCurrency: 'VND' }}
 *   formats to: 200,000
 */
@Pipe({ name: 'numberCurrency' })
export class NumberByCurrencyPipe implements PipeTransform {
  constructor() {}
  transform(
    value: number | string,
    currencyCode = 'VND',
    showCode: 'prefix' | 'suffix' | 'symbol' | null = null
  ): string {
    if (
      isNil(value) ||
      value === '' ||
      !!(value && value.toString().indexOf('.') === value.toString().length - 1)
    ) {
      return '-';
    }

    const roundValue = this.getValidNumber(value).toFixed(
      DecimalOfCurrencyCode[currencyCode]
    );

    let formatOptions: Intl.NumberFormatOptions = {
      minimumFractionDigits: DecimalOfCurrencyCode[currencyCode]
    };
    if (showCode === 'symbol') {
      formatOptions = {
        ...formatOptions,
        style: 'currency',
        currency: currencyCode
      };
    }

    const returnValue = [
      parseFloat(roundValue).toLocaleString(undefined, formatOptions)
    ];

    if (showCode === 'prefix') {
      returnValue.unshift(currencyCode);
    }
    if (showCode === 'suffix') {
      returnValue.push(currencyCode);
    }

    return returnValue.join(' ');
  }

  getValidNumber(value: string | number): number {
    let validValue: number = parseFloat(value.toString());

    if (value.toString().indexOf(',') > 0) {
      validValue = parseFloat(value.toString().replaceAll(',', ''));
    }

    if (isNaN(validValue)) {
      return validValue;
    }

    return validValue;
  }
}
