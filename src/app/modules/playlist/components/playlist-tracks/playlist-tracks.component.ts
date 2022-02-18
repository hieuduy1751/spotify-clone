import { PlaylistItems } from './../../../../spotify/models/playlist/playlist-items';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-playlist-tracks',
  templateUrl: './playlist-tracks.component.html',
  styleUrls: ['./playlist-tracks.component.scss']
})
export class PlaylistTracksComponent implements OnInit {
  @Input() items: PlaylistItems[] = [];
  currentHoverItem: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  onHover(index: number) {
    this.currentHoverItem = index;
  }
}
