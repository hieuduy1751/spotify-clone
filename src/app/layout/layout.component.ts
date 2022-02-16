import { Component, OnInit } from '@angular/core';
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
