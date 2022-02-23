import { Track } from '../../../../app/spotify/models/track/track';
import { TrackService } from '../../../../app/spotify/services/track/track.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-song',
  templateUrl: './player-song.component.html',
  styleUrls: ['./player-song.component.scss']
})
export class PlayerSongComponent implements OnInit {

  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.getTrack();
  }

  getTrack(id?: string) {
    let track: Track;
    this.trackService.getTrack('11dFghVXANMlKmJXsNCbNl').subscribe(
      (data: Track) => {
        track = data;
      }
    );
  }

}
