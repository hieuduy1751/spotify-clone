import { PlaylistState } from './../spotify/states/playlist/playlist.state';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';
import { PlayerComponent } from './components/player/player.component';


@NgModule({
  declarations: [
    LayoutComponent,
    AsideComponent,
    HeaderComponent,
    PlayerComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  providers: [
    PlaylistState
  ]
})
export class LayoutModule { }
