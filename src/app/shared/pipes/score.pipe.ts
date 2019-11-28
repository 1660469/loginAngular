import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(value: number, param1?: number, param2?: number): string {
    return value + ' Điểm';
  }

}
