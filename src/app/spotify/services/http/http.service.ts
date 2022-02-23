import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaderResponse, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http"
import { environment } from "src/environments/environment";
import { catchError, Observable, throwError } from "rxjs";


@Injectable({
  providedIn: 'root'
})

export class HttpService {
  private accessToken!: string;

  constructor(private http: HttpClient) {
  }

  public setToken(token: string) {
    this.accessToken = token;
    console.log(this.accessToken);

  }

  public setHeaders(headers?: any): HttpHeaders {
    const token = 'Bearer ' + this.accessToken;
    let httpHeaders = new HttpHeaders();
    if (token) {
      try {
        httpHeaders = new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: token
        })
      } catch (error) {
        console.log(error);

      }
    }
    return httpHeaders;
  }

  private errorHandler(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred', error.error.message);
    } else {
      return throwError(error);
    }
    return throwError('Something went wrong!');
  }

  public post(path: string, body: any, customHeader?: any): Observable<HttpResponse<any>> {
    return this.http.post<any>(
      path, body,
      {
        headers: this.setHeaders(customHeader),
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  public get(path: string, options?: any, params?: HttpParams): Observable<any> {
    return this.http.get(
      path,
      {
        headers: this.setHeaders(options),
        params,
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }

  public put(path: string, body?: any): Observable<any> {
    return this.http.put(
      path, body,
      {
        headers: this.setHeaders(),
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }


  public delete(path: string): Observable<any> {
    return this.http.delete(
      path,
      {
        headers: this.setHeaders(),
        withCredentials: false,
        observe: 'response'
      })
      .pipe(
        catchError(this.errorHandler)
      );
  }

}