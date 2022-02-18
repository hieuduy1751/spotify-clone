import { PipesModule } from './../../spotify/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaylistRoutingModule } from './playlist-routing.module';
import { PlaylistComponent } from './playlist.component';
import { PlaylistBannerComponent } from './components/playlist-banner/playlist-banner.component';
import { PlaylistTracksComponent } from './components/playlist-tracks/playlist-tracks.component';
import { PlaylistFunctionComponent } from './components/playlist-function/playlist-function.component';
<<<<<<< HEAD
import { MsToMinutes } from 'src/app/spotify/pipes/msToMinutes.pipe';
=======
>>>>>>> d3c5f6b4a63a8d99d93e8a05475fc6923b4ba7e5


@NgModule({
  declarations: [
    PlaylistComponent,
    PlaylistBannerComponent,
    PlaylistTracksComponent,
    PlaylistFunctionComponent
  ],
  imports: [
    CommonModule,
    PlaylistRoutingModule,
    PipesModule
  ]
})
export class PlaylistModule { }
