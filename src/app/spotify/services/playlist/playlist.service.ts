import { PlaylistTrack } from './../../models/playlist/playlist-track';
import { PlaylistImage } from './../../models/playlist/playlist-image';
import { PlaylistOwner } from './../../models/playlist/playlist-owner';
import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { API_PATH } from "../../constance/api-path";
import { Playlist } from "../../models/playlist/playlist";
import { HttpService } from "../http/http.service";

@Injectable({
  providedIn: 'root'
})

export class PlaylistService {
  constructor(private http: HttpService) { }

  getCurrentUserPlaylists(limit?: number, offset?: number): Observable<Playlist[]> {
    return this.http.get(`${API_PATH.BASE_URL}${API_PATH.PLAYLIST.GET_CURRENT_USER_PLAYLISTS}`, {
      params: {
        limit: limit ? limit.toString() : '',
        offset: offset ? offset.toString() : ''
      }
    })
    .pipe(
      map((response: HttpResponse<any>) => {
        const body = response.body.items || [];
        return body.map((item: any) => {
          item.tracks = PlaylistTrack.fromJson(JSON.stringify(item.tracks));
          item.images = PlaylistImage.fromJson(JSON.stringify(item.images));
          item.owner = PlaylistOwner.fromJson(JSON.stringify(item.owner));
          return Playlist.fromJson(JSON.stringify(item));
        });
      })
    );
  }
}