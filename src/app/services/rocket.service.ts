import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Rockets } from '../models/rocket.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RocketService {
  ApiPhp = 'http://localhost/electiva_web/taller2';
  constructor(private http: HttpClient) {}

  //---METHODS-------

  getRockets() {
    return this.http.get(`${this.ApiPhp}/rocket.php`, { responseType: 'text' });
  }
  // createRocket(rocket: Rockets): Observable<Rockets>{
  //   return this.http.post<any>(`${this.ApiPhp}/createRocket.php`,rocket);
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
}
