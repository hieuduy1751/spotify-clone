import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { PlaylistBannerComponent } from './components/playlist-banner/playlist-banner.component';
import { PlaylistTracksComponent } from './components/playlist-tracks/playlist-tracks.component';
import { PlaylistFunctionComponent } from './components/playlist-function/playlist-function.component';


@NgModule({
  declarations: [
    PlaylistComponent,
    PlaylistBannerComponent,
    PlaylistTracksComponent,
    PlaylistFunctionComponent
  ],
  imports: [
    CommonModule,
    PlaylistRoutingModule
  ]
})
export class PlaylistModule { }
