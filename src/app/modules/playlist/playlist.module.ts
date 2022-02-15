import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { PlaylistBannerComponent } from './components/playlist-banner/playlist-banner.component';
import { PlaylistTracksComponent } from './components/playlist-tracks/playlist-tracks.component';


@NgModule({
  declarations: [
    PlaylistComponent,
    PlaylistBannerComponent,
    PlaylistTracksComponent
  ],
  imports: [
    CommonModule,
    PlaylistRoutingModule
  ]
})
export class PlaylistModule { }
