import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'yearPipe' })
export class YearPipe implements PipeTransform {
  transform(value: number): String {
    return moment
      .unix(value)
      .format('YYYY')
      .toString(); // Convert to milliseconds from firevase timestamp
  }
}
