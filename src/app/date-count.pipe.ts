import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): any {
    let gitDate:any = new Date(value)
    let now: any = new Date();
    let today: any = new Date(now.getFullYear(),now.getMonth(),now.getDate())

    var dateDiff = Math.abs(today - gitDate);
    var dayGap = Math.floor(dateDiff/(1000*60*60*24));

    return dayGap;
  }
}