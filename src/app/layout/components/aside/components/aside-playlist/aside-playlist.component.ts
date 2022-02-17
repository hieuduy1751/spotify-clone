import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from 'src/app/spotify/models/playlist/playlist';

@Component({
  selector: 'app-aside-playlist',
  templateUrl: './aside-playlist.component.html',
  styleUrls: ['./aside-playlist.component.scss']
})
export class AsidePlaylistComponent implements OnInit {
  @Input() myPlaylists: Playlist[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
