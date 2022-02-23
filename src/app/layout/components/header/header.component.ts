import { AuthService } from './../../../spotify/services/auth/auth.service';
import { User } from './../../../spotify/models/user/user';
import { NavigatorState } from './../../../spotify/states/navigator/navigator.state';
import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(public navigator: NavigatorState, private router: Router, private auth: AuthService) {
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

  logOut(): void {
    this.auth.clearAuth();
    this.router.navigate(['/auth']);
  }
}
