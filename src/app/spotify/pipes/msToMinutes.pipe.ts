import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'msToMinutes' })
export class MsToMinutes implements PipeTransform {
  transform(value: number, ...args: any[]): string {
    let minutes = (value - (value % 60000)) / 60000;
    let seconds = ((value % 60000) - (value % 1000)) / 1000;
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  }

}