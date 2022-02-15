import { TrackArtist } from './../../models/track/track-artist';
import { TrackAlbum } from './../../models/track/track-album';
import { Track } from './../../models/track/track';
import { HttpService } from './../http/http.service';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_PATH } from '../../constance/api-path';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  constructor(private http: HttpService) {}

  getTrack(id: string): Observable<Track> {
    return this.http.get(`${API_PATH.BASE_URL}${API_PATH.TRACK.GET_TRACK}${id}`)
    .pipe(
      map((response: HttpResponse<any>) => {
        const body = response.body;
          body.album = TrackAlbum.fromJson(JSON.stringify(body.album));
          body.artists = TrackArtist.fromJson(JSON.stringify(body.artists));
          return Track.fromJson(JSON.stringify(body));
      }));
  }
}