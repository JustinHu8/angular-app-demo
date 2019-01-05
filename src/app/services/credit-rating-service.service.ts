import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'Rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreditRatingServiceService {

  constructor(private http: HttpClient) { }

  getCreditScore(url): Observable<any> {
    const headers = new HttpHeaders({
      'content-type': 'application/json',
      'Access-Control-Allow-Origin' : '*'
    });

    return this.http.get(url, {headers});
  }
}

