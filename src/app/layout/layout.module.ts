import { TrackState } from './../spotify/states/track/track.state';
import { NavigatorState } from './../spotify/states/navigator/navigator.state';
import { UserState } from './../spotify/states/user/user.state';
import { PlaylistState } from './../spotify/states/playlist/playlist.state';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { AsideComponent } from './components/aside/aside.component';
import { HeaderComponent } from './components/header/header.component';
import { PlayerComponent } from './components/player/player.component';
import { PlayerControlComponent } from './components/player/components/player-control/player-control.component';
import { PlayerFunctionComponent } from './components/player/components/player-function/player-function.component';
import { AsidePlaylistComponent } from './components/aside/components/aside-playlist/aside-playlist.component';
import { PlayerSongComponent } from './components/player/components/player-song/player-song.component';


@NgModule({
  declarations: [
    LayoutComponent,
    AsideComponent,
    HeaderComponent,
    PlayerComponent,
    PlayerSongComponent,
    PlayerControlComponent,
    PlayerFunctionComponent,
    AsidePlaylistComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  providers: [
    PlaylistState,
    UserState,
    NavigatorState,
    TrackState
  ]
})
export class LayoutModule { }
