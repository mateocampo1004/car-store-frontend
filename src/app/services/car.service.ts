// car.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private baseUrl = `${environment.apiBaseUrl}/cars`; // Ajusta la URL base según la configuración de tu entorno

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getCarById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createCar(carData: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, carData);
  }

  updateCar(id: number, carData: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, carData);
  }

  deleteCar(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
