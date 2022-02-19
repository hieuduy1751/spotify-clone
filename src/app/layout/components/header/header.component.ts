import { NavigatorState } from './../../../spotify/states/navigator/navigator.state';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('header') header!: ElementRef;
  constructor(public navigator: NavigatorState) {
  }

  ngOnInit(): void {
  }

  back() {
    this.navigator.back();
  }

  forward() {
    this.navigator.forward();
  }
}
