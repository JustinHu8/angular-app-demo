import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'Rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) { }

  getTransactions(url): Observable<any> {
    const headers = new HttpHeaders({
      // tslint:disable-next-line:max-line-length
      'authorization': 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiIsImtpZCI6ImhzYmMtYXNwc3AtZWMifQ.eyJpc3MiOiJodHRwczovL2FwaS5oc2JjLnFhLnhsYWJzLm9uZS9hcy90b2tlbi5vYXV0aDIiLCJ0b2tlbl91c2UiOiJhY2Nlc3MiLCJzY29wZSI6ImFjY291bnRzIiwiYXVkIjoiNXYyYzlrN2hwaml2aXB2bnZnNzcxaDNyNGQiLCJzdWIiOiJjcmtJNE5wVHhTIiwianRpIjoiNzQ0YjM2YWMzNmQ3YjA2YiIsImlhdCI6MTUzOTY3OTQ0OCwiZXhwIjoxNTc1Njc5NDQ4fQ.FHQpwb2jG7xEu3ED2Otb1MQyqmaJ6cTIAR4xxPIQYcC3_j2JSGwAXxKwInlAFtGPpuCM2FCJz-hHTHunD6x9Bg',
      'x-fapi-customer-ip-address': '10.23.143.98',
      'x-fapi-financial-id': 'OB/2017/001',
      'x-fapi-interaction-id': '2c96efd2-6566-490a-81d7-24dd51340196',
    });

    return this.http.get(url, {headers});
  }

}
