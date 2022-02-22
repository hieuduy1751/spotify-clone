import { AuthService } from './../../../../spotify/services/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  requestToken(): void {
    this.authService.requestToken();
  }

}
