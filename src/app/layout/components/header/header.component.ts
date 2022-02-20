import { User } from './../../../spotify/models/user/user';
import { NavigatorState } from './../../../spotify/states/navigator/navigator.state';
import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('header') header!: ElementRef;
  @ViewChild('account') accountERef!: ElementRef;
  @Input() me!: User;
  profileControlStatus = false;

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

  @HostListener('document:click', ['$event'])
  clickOut(event: any) {
    if (!this.accountERef.nativeElement.contains(event.target)) {
      this.profileControlStatus = false;
    }
  }
}
