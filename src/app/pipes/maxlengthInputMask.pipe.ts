import { Pipe, PipeTransform } from '@angular/core';
import { isNil } from 'ng-zorro-antd/core/util';

@Pipe({ name: 'numberMaxLengthMask' })
export class NumberMaxLengthMaskPipe implements PipeTransform {
  transform(value: number | string): number {
    const numberValue = parseFloat(value.toString());
    if (isNil(value) || isNaN(numberValue)) {
      return Infinity;
    }

    const result = numberValue + numberValue / 3 - 1;

    return Math.floor(result);
  }
}
