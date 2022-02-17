import { UserState } from './../spotify/states/user/user.state';
import { Component, OnInit } from '@angular/core';
import { AsideMenu, AsideMenuConfig } from '../spotifyUI/configs/aside-menu.config';
import { User } from '../spotify/models/user/user';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  asideWidth = 20;
  asideMenu: AsideMenu[] = AsideMenuConfig.items;
  buttons: AsideMenu[] = AsideMenuConfig.buttons;
  me: User = new User();
  constructor(private userState: UserState) {
    this.userState.me$.subscribe((me) => {
      this.me = me;
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }
}
