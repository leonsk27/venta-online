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
    return this.http.get<any[]>(`${this.API_URI}/report/1`);
  }
  reportThree( date1: Date, date2: Date) {
    return this.http.get<any[]>(`${this.API_URI}/report/3/${date1}/${date2}`);
  }
  reportFive() {
    return this.http.get<any[]>(`${this.API_URI}/report/5`);
  }
  reportSeven() {
    return this.http.get<any[]>(`${this.API_URI}/report/7`);
  }
}
