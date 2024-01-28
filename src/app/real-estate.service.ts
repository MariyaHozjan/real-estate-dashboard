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

  addRealEstate(realEstate: RealEstate): Observable<RealEstate> {
    const { id, ...realEstateData } = realEstate; // Exclude id for new entries
    return this.http.post<RealEstate>(this.apiUrl, realEstateData);
  }

  deleteRealEstate(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateRealEstate(
    id: number,
    updatedEstate: RealEstate
  ): Observable<RealEstate> {
    return this.http.put<RealEstate>(`${this.apiUrl}/${id}`, updatedEstate);
  }
}
