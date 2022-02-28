import { Component } from '@angular/core';
import { HttpService } from './spotify/services/http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private http: HttpService
  ) {
    this.http.setToken();
  }
}
