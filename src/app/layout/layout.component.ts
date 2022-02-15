import { PlaylistState } from './../spotify/states/playlist/playlist.state';
import { Component, OnInit } from '@angular/core';
import { Playlist } from '../spotify/models/playlist/playlist';
import { PlaylistService } from '../spotify/services/playlist/playlist.service';
import { SearchService } from '../spotify/services/search/search.service';
import { AsideMenu, AsideMenuConfig } from '../spotifyUI/configs/aside-menu.config';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  asideWidth = 16;
  asideMenu: AsideMenu[] = AsideMenuConfig.items;
  buttons: AsideMenu[] = AsideMenuConfig.buttons;
  constructor() { }

  ngOnInit(): void {
  } 
}
