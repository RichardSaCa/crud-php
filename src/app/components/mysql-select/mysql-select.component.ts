import { Component } from '@angular/core';
import { Rockets } from 'src/app/models/rocket.model';
import { RocketService } from 'src/app/services/rocket.service';

@Component({
  selector: 'app-mysql-select',
  templateUrl: './mysql-select.component.html',
  styleUrls: ['./mysql-select.component.scss']
})
export class MysqlSelectComponent {

  //--VARIABLES--
  rockets:any[] = [];

  constructor(
    private rocketservice: RocketService
  ){
    this.rockets = [];
  }

  ngOnInit(): void {
    // Consulta 1: Consulta para obtener el costo total de los lanzamientos de un cohete
    this.rocketservice.getConsulta1().subscribe(result =>{
      this.rockets = result;
      console.log("[app-mysql-select] Rockets List: ", this.rockets);
    })
  }

  //--METHODS--

}
