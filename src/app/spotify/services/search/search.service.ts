import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpService) { }

  searchItem(keyword: string, type?: string, limit?: number, offset?: number) {
    let params = new HttpParams()
    .set('q', keyword)
    .set('type', type ? type : 'track,artist')
    .set('market', 'VN');
    const url = environment.apiPath.home + environment.apiPath.search.search + params.toString();
    
    
    this.http.get(url, {
      headers: this.http.setHeaders()
    }).subscribe(res => console.log(res));
  }
}
