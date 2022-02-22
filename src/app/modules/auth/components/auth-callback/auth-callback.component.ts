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
  constructor(private route: ActivatedRoute, private http: HttpService, private router: Router) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => {
      let res = this.parseFragment(fragment!);
      this.error = res.error;
      this.state = res.state;
      this.accessToken = res.access_token;
      this.saveToken();
    });
  }

  ngAfterViewInit() {
  }

  checkState(state: string | null): boolean {
    if (state != localStorage.getItem('stateKey')) {
      localStorage.removeItem('stateKey');
      return false;
    } else {
      localStorage.removeItem('stateKey');
      return true;
    }
  }

  parseFragment(fragment: string): any {
    let res = fragment!.split('&');
    let obj = {};
    res.forEach(item => {
      let key = item.split('=')[0];
      let value = item.split('=')[1];
      (obj as any)[key] = value;
    });
    return obj;
  }

  saveToken(): void {
    if (this.error || !this.checkState(this.state)) {
      this.error = true;
    } else {
      this.http.setToken(this.accessToken!);
      this.router.navigate(['/']);      
    }
  }
}
