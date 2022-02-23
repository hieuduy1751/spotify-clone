import { AuthService } from './auth.service';
import { User } from './../../models/user/user';
import { UserService } from './../user/user.service';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { catchError, Observable, throwError } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService, private auth: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    // if(this.userService.validMe()) {
    //   this.auth.clearAuth();
    // }
    // return this.userService.validMe();
    return true;
  }
}