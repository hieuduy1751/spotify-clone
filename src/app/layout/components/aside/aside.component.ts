import { PlaylistState } from './../../../spotify/states/playlist/playlist.state';
import { Component, Input, OnInit } from '@angular/core';
import { AsideMenu } from '../../../spotifyUI/configs/aside-menu.config'
import { Playlist } from 'src/app/spotify/models/playlist/playlist';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  @Input() menu!: AsideMenu[];
  @Input() buttons!: AsideMenu[];
  myPlaylists: Playlist[] = [];

  constructor(private playlistState: PlaylistState) { }

  ngOnInit(): void {
    this.listenStateEvent();
  }

  listenStateEvent(): void {
    this.playlistState.playlists$.subscribe(playlists => this.playlistsChange());
  }

  playlistsChange(): void {
    const playlists = this.playlistState.getMyPlaylist();
    if (playlists) {
      this.myPlaylists = playlists;
    }
  }
}
