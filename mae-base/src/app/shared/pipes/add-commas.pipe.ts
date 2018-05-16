import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'maeAddCommas' })
export class AddCommasPipe implements PipeTransform {
  transform(array: null | string[]) {
    if (!array) {
      return '';
    }

    switch (array.length) {
      case 0:
        return '';
      case 1:
        return array[0];
      case 2:
        return array.join(' and ');
      default:
        const last = array[array.length - 1];
        const remaining = array.slice(0, -1);
        return `${remaining.join(', ')}, and ${last}`;
    }
  }
}
