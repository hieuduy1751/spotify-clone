import { HttpService } from './../http/http.service';
import { Injectable } from "@angular/core";
import { catchError, map, Observable, throwError } from 'rxjs';
import { User } from '../../models/user/user';
import { API_PATH } from '../../constance/api-path';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpService, private router: Router) { }

  getMe(): Observable<User> {
    return this.http.get(`${API_PATH.BASE_URL}${API_PATH.USER.GET_ME}`)
      .pipe(
        map((response: HttpResponse<any>) => {
          const body = response.body;

          return User.fromJson(JSON.stringify(body));
        })
      );
  }

  getUser(id: string): Observable<User> {
    return this.http.get(`${API_PATH.BASE_URL}${API_PATH.USER.GET_USER}${id}`)
      .pipe(
        map((response: HttpResponse<any>) => {
          const body = response.body;
          return User.fromJson(JSON.stringify(body));
        })
      );
  }

  validMe(): Observable<boolean> {
    this.http.setToken();
    return this.http.get(`${API_PATH.BASE_URL}${API_PATH.USER.GET_ME}`)
      .pipe(
        map((response: HttpResponse<any>) => {
          const body = response.body;
          return body.id !== undefined;
        }),
        catchError((err) => {
          this.router.navigate(['/auth']);
          return throwError(err);
        })
      );
  }
}