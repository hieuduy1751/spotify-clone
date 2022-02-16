import { PlaylistState } from './../../spotify/states/playlist/playlist.state';
import { Component, OnInit } from '@angular/core';
import { Playlist } from 'src/app/spotify/models/playlist/playlist';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  playlist!: Playlist;
  private routeSub: Subscription = new Subscription;
  currentPlaylistId!: string;
  bannerBackgroundColor!: object;

  constructor(private playlistState: PlaylistState, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.currentPlaylistId = params['id'];
      this.playlistState.loadPlaylist(this.currentPlaylistId);
    }
    );
    this.listenStateEvent();
  }

  listenStateEvent(): void {
    this.playlistState.playlist$.subscribe(playlist => this.playlistChange());
    this.playlistState.colorDetected$.subscribe(color => this.colorChange());
  }

  playlistChange(): void {
    const playlist = this.playlistState.getPlaylist();
    console.log(playlist);

    if (playlist) {
      this.playlist = playlist;
      if (playlist.images) {
        this.playlistState.loadColor(playlist.images[0].url);
        this.bannerBackgroundColor = this.playlistState.getColorDetected();
      }
    }
  }

  colorChange(): void {
    const color = this.playlistState.getColorDetected();
    console.log(color);

    if (color) {
      this.bannerBackgroundColor = color;
    }
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }
}
