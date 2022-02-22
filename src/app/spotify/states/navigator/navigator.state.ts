import { Injectable } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { BehaviorSubject, from, throwIfEmpty } from "rxjs";

@Injectable()
export class NavigatorState {
  history$ = new BehaviorSubject<string[]>([]);
  history: string[] = [];
  current$ = new BehaviorSubject<number>(-1);
  backStatus = false;
  forwardStatus = false;
  fromBack = false;
  fromForward = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (this.fromBack || this.fromForward) {
      }
      else {
        if (event instanceof NavigationEnd) {
          this.history.push(event.url);
          this.history$.next(this.history);
          this.current$.next(this.history.length - 1);
        }
      }
    });

    this.current$.subscribe(res => {
      this.backStatus = res > 0;
      this.forwardStatus = res < this.history$.getValue().length - 1;
    })
  }


  back() {
    this.fromBack = true;
    if (this.current$.getValue() > 0) {
      this.current$.next(this.current$.getValue() - 1);
      window.history.back();
    }
    setTimeout(() => {
      this.fromBack = false;
    }, 1000);
  }

  forward() {
    this.fromForward = true;
    if (this.current$.getValue() < this.history$.getValue().length - 1) {
      this.current$.next(this.current$.getValue() + 1);
      window.history.forward();
    }
    setTimeout(() => {
      this.fromForward = false;
    }, 1000);
  }
}