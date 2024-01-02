import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RealEstate } from './model/real-estate';

@Injectable({
  providedIn: 'root',
})
export class RealEstateService {
  private apiUrl = 'http://localhost:8080/real-estates'; // Adjust the URL as needed

  constructor(private http: HttpClient) {}

  getRealEstates(): Observable<RealEstate[]> {
    return this.http.get<RealEstate[]>(this.apiUrl);
  }

  addRealEstate(realEstate: RealEstate): Observable<any> {
    return this.http.post(this.apiUrl, realEstate);
  }

  deleteRealEstate(index: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${index}`);
  }
}
