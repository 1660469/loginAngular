import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fee'
})
export class FeePipe implements PipeTransform {

  // transform(value: number, param1?: number): number {
  //   if(value > 1000)
  //     return value/1000 + ' vnd';
  // }
  transform(value: number | string, locale?: string): string {
    return new Intl.NumberFormat(locale, {
      minimumFractionDigits: 2
    }).format(Number(value)) + ' vnd';
  }
}
