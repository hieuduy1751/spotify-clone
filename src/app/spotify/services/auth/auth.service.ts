import { HttpParams } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  state!: string;

  constructor(
  ) {
    if (!this.checkStateExist()) {
      this.state = this.generateRandomString(16);
      this.setState(this.state);
    } else {
      this.state = localStorage.getItem('stateKey')!;
    }
  }

  generateRandomString(length: number): string {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < length; i++) {
      text += possible[Math.floor(Math.random() * possible.length)];
    }
    return text;
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

  fragmentParser(fragment: string): any {
    let res = fragment!.split('&');
    let obj = {};
    res.forEach(item => {
      let key = item.split('=')[0];
      let value = item.split('=')[1];
      (obj as any)[key] = value;
    });
    return obj;
  }

  setState(state: string) {
    localStorage.setItem('stateKey', state);
  }

  getCookie(name: string): string | null {
    const nameLenPlus = (name.length + 1);
    return document.cookie
      .split(';')
      .map(c => c.trim())
      .filter(cookie => {
        return cookie.substring(0, nameLenPlus) === `${name}=`;
      })
      .map(cookie => {
        return decodeURIComponent(cookie.substring(nameLenPlus));
      })[0] || null;
  }

  setCookie(cname: string, cvalue: string, time: number) {
    let expires = "expires=" + time;
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  checkCookie(cname: string, cvalue: string): boolean {
    if (cvalue == this.getCookie(cname)) {
      return true;
    }
    return false;
  }

  checkState(state: string | null): boolean {
    if (state != localStorage.getItem('stateKey')) {
      // localStorage.removeItem('stateKey');
      return false;
    } else {
      return true;
    }
  }

  checkStateExist(): boolean {
    if (localStorage.getItem('stateKey') == null) {
      return false;
    } else {
      return true;
    }
  }

  clearAuth() {
    this.state = this.generateRandomString(16);
    this.setState(this.state);
    this.setCookie('access_token', '', -1);
  }
}