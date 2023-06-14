import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rockets } from '../models/rocket.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RocketService {
  ApiPhp = 'http://localhost/electiva_web/taller2';
  ApiPhp2 = 'http://localhost/ElectivaWeb/backend_php/crud-php/src/assets/php-backend';
  constructor(private http: HttpClient) {}

  //---METHODS-------

  getRockets() {
    return this.http.get(`${this.ApiPhp}/rocket.php`, { responseType: 'text' });
  }
  getRockets1() {
    return this.http.get<any>(`${this.ApiPhp}/rocket.php`);
  }

  // createRocket(rocket: Rockets): Observable<Rockets>{
  //   return this.http.post<any>(`${this.ApiPhp2}/createRocket.php`,rocket);
  // }
  createRocket(rocket: Rockets){
    return this.http.post(`${this.ApiPhp}/createRocket.php`,rocket,{ responseType: 'text' });
  }
  // deleteRocket(rocket: Rockets): Observable<Rockets>{
  //   return this.http.post<any>(`${this.ApiPhp}/deleteRocket.php`,rocket);
  // }
  deleteRocket(rocket: Rockets){
    return this.http.post(`${this.ApiPhp}/deleteRocket.php`,rocket,{ responseType: 'text' });
  }
  updateRocket(rocket: Rockets){
    return this.http.post(`${this.ApiPhp}/updateRocket.php`,rocket,{ responseType: 'text' });
  }

  getConsulta1(id?: string) {
    // Append the id parameter to the URL if it is provided
    const url = `${this.ApiPhp}/consulta1.php${id ? `?id=${id}` : ''}`;

    // Send the HTTP GET request
    return this.http.get<any>(url);
  }

  getConsulta2(id?:string) {
    const url = `${this.ApiPhp}/consulta2.php${id ? `?id=${id}` : ''}`;
    return this.http.get<any>(url);
  }

  getConsulta3(id?:string) {
    const url = `${this.ApiPhp}/consulta3.php${id ? `?id=${id}` : ''}`;
    return this.http.get<any>(url);
  }
}
