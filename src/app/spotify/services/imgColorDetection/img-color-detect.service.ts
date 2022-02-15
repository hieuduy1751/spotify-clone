import { HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { API_PATH_CD } from './../../constance/api-path-cd';
import { HttpService } from './../http/http.service';
import { Injectable } from "@angular/core";
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImgColorDetectService {
  constructor(private http: HttpService) { }
  
  ngOnInit() {

  }

  getDominantColor(imgSrc: string) {
    let params = new HttpParams()
    .set('url', imgSrc)
    .set('models', 'properties')
    .set('api_user', environment.sightengine.api_user)
    .set('api_secret', environment.sightengine.api_secret);

    return this.http.get(`${API_PATH_CD.BASE_URL}${API_PATH_CD.COLOR_DETECTION}?${params.toString()}`)
    .pipe(
      map((response: HttpResponse<any>) => {
        return response.body;
      })
    );
  }

}