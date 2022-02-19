import { BehaviorSubject } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class NavigatorService {
  history$ = new BehaviorSubject<string[]>([]);
  history: string[] = [];
  current$ = new BehaviorSubject<number>(-1);
  backStatus = false;
  forwardStatus = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.history.length < 2) {
          this.history.push(event.url);
          this.history$.next(this.history);
          this.current$.next(this.history.length - 1);
        } else {
          if (this.current$.getValue() == 0) {
            if (event.url == this.history[1])
              this.current$.next(this.current$.getValue() + 1);
            else {
              this.history.slice(0, 1);
              this.history.push(event.url);
              this.history$.next(this.history);
              this.current$.next(this.history.length - 1);
            }
          } else if (this.current$.getValue() == this.history.length - 1) {
            if (event.url == this.history[this.history.length - 2])
              this.current$.next(this.current$.getValue() - 1);
            else {
              this.history.push(event.url);
              this.history$.next(this.history);
              this.current$.next(this.history.length - 1);
            }
          } else if (this.current$.getValue() > 0 && this.current$.getValue() < this.history.length - 1) {
            if (event.url != this.history[this.current$.getValue() - 1] && event.url != this.history[this.current$.getValue() + 1]) {
              this.history.slice(0, this.current$.getValue() + 1);
              this.history.push(event.url);
              this.history$.next(this.history);
              this.current$.next(this.history.length - 1);
            } else if (event.url == this.history[this.current$.getValue() - 1]) {
              this.current$.next(this.current$.getValue() - 1);
            } else if (event.url == this.history[this.current$.getValue() + 1]) {
              this.current$.next(this.current$.getValue() + 1);
            }
          }
        }
      }
    });

    this.current$.subscribe(res => {
      this.backStatus = res > 0;
      this.forwardStatus = res < this.history$.getValue().length - 2;
    })
  }


  back() {
    if (this.current$.getValue() > 0)
      this.current$.next(this.current$.getValue() - 1);
  }

  forward() {
    if (this.current$.getValue() < this.history$.getValue().length - 2)
      this.current$.next(this.current$.getValue() + 1);
  }
}
// [1, 2]