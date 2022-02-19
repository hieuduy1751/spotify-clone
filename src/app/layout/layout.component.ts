import { PlaylistState } from './../spotify/states/playlist/playlist.state';
import { HeaderComponent } from './components/header/header.component';
import { UserState } from './../spotify/states/user/user.state';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AsideMenu, AsideMenuConfig } from '../spotifyUI/configs/aside-menu.config';
import { User } from '../spotify/models/user/user';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @ViewChild(HeaderComponent)
  header!: HeaderComponent;
  asideWidth = 20;
  asideMenu: AsideMenu[] = AsideMenuConfig.items;
  buttons: AsideMenu[] = AsideMenuConfig.buttons;
  me: User = new User();
  constructor(private userState: UserState, private playlistState: PlaylistState) {
    this.userState.me$.subscribe((me) => {
      this.me = me;
    });
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {

  }

  onScroll(event: any) {
    let color = this.playlistState.getColorDetected();

    if (color.colors.accent) {
      this.header.header.nativeElement.style.backgroundColor = `rgba(${color.colors.dominant.r}, ${color.colors.dominant.g}, ${color.colors.dominant.b}, ${event.target.scrollTop / 100})`;
    } else {
      this.header.header.nativeElement.style.backgroundColor = `rgba(33, 33, 33, ${event.target.scrollTop / 100})`;
    }
  }
}
