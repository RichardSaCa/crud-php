import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RocketService {
  ApiPhp = 'http://localhost/electiva_web/taller2';
  ApiPhp2 = 'http://localhost/ElectivaWeb/backend_php/crud-php/src/assets/php-backend';
  constructor(private http: HttpClient) {}

  //---METHODS-------

  getRockets() {
    return this.http.get<any>(`${this.ApiPhp2}/rocket.php`);
  }

  getConsulta1(id?: string) {
    // Append the id parameter to the URL if it is provided
    const url = `${this.ApiPhp2}/consulta1.php${id ? `?id=${id}` : ''}`;

    // Send the HTTP GET request
    return this.http.get<any>(url);
  }

  getConsulta2(id?:string) {
    const url = `${this.ApiPhp2}/consulta2.php${id ? `?id=${id}` : ''}`;
    return this.http.get<any>(url);
  }

  getConsulta3(id?:string) {
    const url = `${this.ApiPhp2}/consulta3.php${id ? `?id=${id}` : ''}`;
    return this.http.get<any>(url);
  }
}
