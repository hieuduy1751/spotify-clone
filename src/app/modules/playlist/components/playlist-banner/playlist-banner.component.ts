import { Component, Input, OnInit } from '@angular/core';
import { Playlist } from 'src/app/spotify/models/playlist/playlist';

@Component({
  selector: 'app-playlist-banner',
  templateUrl: './playlist-banner.component.html',
  styleUrls: ['./playlist-banner.component.scss']
})
export class PlaylistBannerComponent implements OnInit {
  @Input() playlist!: Playlist;
  @Input() bannerColor!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
