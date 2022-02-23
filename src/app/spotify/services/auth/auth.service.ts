import { HttpParams } from '@angular/common/http';
import { HttpService } from './../http/http.service';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  state = this.generateRandomString(16);

  constructor(private http: HttpService) { 
    localStorage.setItem('stateKey', this.state);
  }

  requestToken(): void {
    let params = new HttpParams()
      .set('client_id', environment.spotify.client_id)
      .set('response_type', 'token')
      .set('redirect_uri', environment.spotify.redirect_uri)
      .set('scope', environment.spotify.scope)
      .set('state', this.state);

    window.location.href = environment.apiPath.auth + '?' + params.toString();
  }

  generateRandomString(length: number): string {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
      text += possible[Math.floor(Math.random() * possible.length)];
    }
    return text;
  }
}