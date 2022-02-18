import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "fromNow" })
export class FromNow implements PipeTransform {
  transform(value: any, ...args: any[]) {
    let date = new Date(value);
    let minutes = Math.floor((new Date().getTime() - date.getTime()) / 1000 / 60);
    if (minutes < 119) {
      return "1 hour ago";
    } else if (minutes < 1439) {
      return Math.floor(minutes / 60) + " hours ago";
    } else if (minutes < 2879) {
      return "1 day";
    } else if (minutes < 43199) {
      return Math.floor(minutes / 1440) + " days ago";
    }
    return new DatePipe("en-US").transform(value);
  }

}