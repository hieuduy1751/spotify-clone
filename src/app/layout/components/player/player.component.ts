import { TrackState } from './../../../spotify/states/track/track.state';
import { Component, OnInit } from '@angular/core';
import { Track } from 'src/app/spotify/models/track/track';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor(private trackState: TrackState) { }

  track!: Track;

  ngOnInit(): void {
    this.trackState.loadTrack('0lTjrAKc4VY6p2et9mJcYn');
    this.trackState.track$.subscribe(track => {
      this.track = track;
      console.log(this.track);
    })
  }

}
