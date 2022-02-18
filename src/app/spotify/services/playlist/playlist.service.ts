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
          return Playlist.fromJson(JSON.stringify(body));
        }
        ));
  }

  createNewPlaylist(userId: string, index?: number): Observable<Playlist> {
    return this.http.post(`${API_PATH.BASE_URL}/users/${userId}/playlists`, {
      name: "New Playlist" + (index ? index : ''),
      description: "New playlist description",
      public: false
    }).pipe(
      map((res: HttpResponse<any>) => Playlist.fromJson(JSON.stringify(res.body)))
    );
  }
}