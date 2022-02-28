import { Router } from '@angular/router';
import { HttpService } from './../../../../spotify/services/http/http.service';
import { AuthService } from './../../../../spotify/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { API_PATH } from 'src/app/spotify/constance/api-path';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  constructor(private authService: AuthService, private http: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.http.getWithPromise(`${API_PATH.BASE_URL}${API_PATH.USER.GET_ME}`)
      .then(res => {
        if (res && res.status === 200) {
          this.http.setToken();
          this.router.navigate(['/']);
        }
      })
      .catch(err => {
        console.log(err);
        this.router.navigate(['/auth']);
      });
  }

  requestToken(): void {
    this.authService.requestToken();
  }

}
