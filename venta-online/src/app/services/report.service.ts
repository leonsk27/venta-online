import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  API_URI = 'http://localhost:3000/api';
  constructor(
    private http: HttpClient
  ) { }
  reportOne() {
    return this.http.get<any>(`${this.API_URI}/report/1`);
  }
}
