import { ExternalUlrs } from './../../models/externalUrls';
import { PlaylistFollowers } from './../../models/playlist/playlist-followers';
import { PlaylistTrack } from './../../models/playlist/playlist-track';
import { PlaylistOwner } from './../../models/playlist/playlist-owner';
import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { API_PATH } from "../../constance/api-path";
import { Playlist } from "../../models/playlist/playlist";
import { HttpService } from "../http/http.service";
import { Image } from '../../models/image';

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
            this.apiParser(item);
            return Playlist.fromJson(JSON.stringify(item));
          });
        })
      );
  }

  getPlaylist(id: string): Observable<Playlist> {
    return this.http.get(`${API_PATH.BASE_URL}${API_PATH.PLAYLIST.GET_PLAYLIST}${id}`)
      .pipe(
        map((response: HttpResponse<any>) => {
          const body = response.body;
          this.apiParser(body, false);
          return Playlist.fromJson(JSON.stringify(body));
        }
        ));
  }

  apiParser(playlist: any, list?: boolean): any {
    list == false ? (playlist.followers = PlaylistFollowers.fromJson(JSON.stringify(playlist.followers))) : null;
    playlist.external_urls = ExternalUlrs.fromJson(JSON.stringify(playlist.external_urls));
    playlist.tracks = PlaylistTrack.fromJson(JSON.stringify(playlist.tracks));
    playlist.images = Image.fromJson(JSON.stringify(playlist.images));
    playlist.owner = PlaylistOwner.fromJson(JSON.stringify(playlist.owner));
    return playlist;
  }
}