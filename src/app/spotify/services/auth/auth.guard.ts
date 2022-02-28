import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { API_PATH } from "../../constance/api-path";
import { HttpService } from '../http/http.service';


@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {

  constructor(
    private http: HttpService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.http.getWithPromise(`${API_PATH.BASE_URL}${API_PATH.USER.GET_ME}`)
      .then((res) => {
        if(res.status === 200) {
          return true;
        } else {
          this.router.navigate(['/auth']);
          return false;
        }
      })
      .catch((err) => {
        this.router.navigate(['/auth']);
        return false;
      });
  }
}