import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_PATH } from '../../constance/api-path';
import { Artist } from '../../models/artist/artist';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class FollowService {
  constructor(
    private http: HttpService
  ) {}

  getFollowed(limit?: number, offset?: number) {
    return this.http.get(`${API_PATH.BASE_URL}${API_PATH.FOLLOW.GET_FOLLOWED}`, {
      params: {
        limit: limit ? limit.toString() : '',
        offset: offset ? offset.toString() : ''
      }
    })
      .pipe(
        map((response: HttpResponse<any>) => {
          const body = response.body.artists.items || [];
          return body.map((item: any) => {
            return Artist.fromJson(JSON.stringify(item));
          });
        })
      );
  }
}