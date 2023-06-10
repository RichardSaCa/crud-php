import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RocketService {
  ApiPhp = 'http://localhost/electiva_web/taller2';
  constructor(private http: HttpClient) {}

  //---METHODS-------

  getRockets() {
    return this.http.get<any>(`${this.ApiPhp}/rocket.php`);
  }
}
