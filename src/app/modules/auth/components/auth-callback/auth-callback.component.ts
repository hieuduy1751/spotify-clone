import { AuthService } from './../../../../spotify/services/auth/auth.service';
import { Router } from '@angular/router';
import { HttpService } from './../../../../spotify/services/http/http.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';


@Component({
  selector: 'app-auth-callback',
  templateUrl: './auth-callback.component.html',
  styleUrls: ['./auth-callback.component.scss']
})
export class AuthCallbackComponent implements OnInit {
  error = false;
  state!: string | null;
  accessToken!: string | null;
  constructor(private route: ActivatedRoute, private router: Router, private auth: AuthService, private http: HttpService) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      let res = this.auth.fragmentParser(fragment!);
      this.error = res.error;
      this.state = res.state;
      this.accessToken = res.access_token;
      this.saveToken();
    });
  }

  ngAfterViewInit() {
  }

  saveToken(): void {
    if (this.error != undefined || !this.auth.checkState(this.state)) {
      this.error = true;
    } else {
      this.auth.setCookie('access_token', this.accessToken!, 3600);
      this.http.setToken();
      this.router.navigate(['/']);
    }
  }
}
