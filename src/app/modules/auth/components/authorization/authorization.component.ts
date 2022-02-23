import { Router } from '@angular/router';
import { HttpService } from './../../../../spotify/services/http/http.service';
import { AuthService } from './../../../../spotify/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  constructor(private authService: AuthService, private http: HttpService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.getCookie('access_token') != null) {
      this.http.setToken();
      this.router.navigate(['/']);
    }
  }

  requestToken(): void {
    this.authService.requestToken();
  }

}
