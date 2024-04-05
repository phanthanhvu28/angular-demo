import { UpperCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

export type UpperCAseFirstFormatMode = 'start-str' | 'start-word' | 'all';

/*
 * format number decimal
 * Usage:
 *   value | uppercaseFirst: `format mode`
 * Format mode:
 *  `start-str`, `start-word` , `all`. Default is `start-str`
 * Example:
 *   {{ 'CREATE DATE' | uppercaseFirst: 'start-str' }}
 *   formats to: 'Create date'
 *   {{ 'create date' | uppercaseFirst: 'start-word' }}
 *   formats to: 'Create Date'
 *   {{ 'create date' | uppercaseFirst: 'all' }}
 *   formats to: 'CREATE DATE'
 */
@Pipe({ name: 'uppercaseFirst' })
export class UppercaseFirstPipe implements PipeTransform {
  constructor() {}
  transform(
    value: string,
    format: UpperCAseFirstFormatMode = 'start-str',
    wordBreakSymbol: string = ' '
  ): string {
    if (!value) {
      return '';
    }

    if (format === 'all') {
      return value.toLocaleUpperCase();
    }

    if (format === 'start-word') {
      return value
        .split(wordBreakSymbol)
        .reduce((arr: string, curr: string) => {
          const lowerCaseWord = curr.toLocaleLowerCase();
          arr += ` ${
            lowerCaseWord.charAt(0).toUpperCase() + lowerCaseWord.slice(1)
          }`;
          return arr;
        }, '');
    }

    const lowerCaseStr = value.toLocaleLowerCase();
    return lowerCaseStr.charAt(0).toUpperCase() + lowerCaseStr.slice(1);
  }
}
