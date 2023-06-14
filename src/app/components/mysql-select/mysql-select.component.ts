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
  rockets_slider:any[] = [];
  id_sql:string = "";
  rockets:any[] = [];
  rockets2:any[] = [];
  rockets3:any[] = [];
  error1:string = "";
  error2:string = "";
  error3:string = "";

  constructor(
    private rocketservice: RocketService
  ){
    this.rockets = [];
  }

  ngOnInit(): void {
    // Consultar todos los cohetes para llenar slider de id de cohetes
    this.rocketservice.getRockets().subscribe(result =>{
      this.rockets_slider = result;
      //console.log("[app-mysql-select] Rockets List: ", this.rockets);
    })
    // Consulta 1: Consulta para obtener el costo total de los lanzamientos de un cohete
    this.rocketservice.getConsulta1().subscribe(result =>{
      // if result has the property "error" then show the error
      if(result.hasOwnProperty("error")){
        this.error1 = result["error"];
        //console.log("[app-mysql-select] Rockets List: ", this.error1);
      }else{
        this.rockets = result;
      }
      //console.log("[app-mysql-select] Rockets List: ", result);
    })
    this.rocketservice.getConsulta2().subscribe(result =>{
      if(result.hasOwnProperty("error")){
        this.error2 = result["error"];
        //console.log("[app-mysql-select] Rockets List: ", this.error2);
      }else{
        this.rockets2 = result;
      }
    })
    this.rocketservice.getConsulta3().subscribe(result =>{
      if(result.hasOwnProperty("error")){
        this.error3 = result["error"];
        //console.log("[app-mysql-select] Rockets List: ", this.error1);
      }else{
        this.rockets3 = result;
      }
    })
  }

  //--METHODS--
  selectChangeHandler(event: any){
    //update the ui
    this.id_sql = event.target.value;
    //console.log("[app-mysql-select] id_sql: ", this.id_sql);

    // limpiar todas las variables
    this.rockets = [];
    this.rockets2 = [];
    this.rockets3 = [];

    this.rocketservice.getConsulta1(this.id_sql).subscribe(result =>{
      // if result has the property "error" then show the error
      if(result.hasOwnProperty("error")){
        this.error1 = result["error"];
        //console.log("[app-mysql-select] Rockets List: ", this.error1);
      }else{
        this.rockets = result;
      }
      //console.log("[app-mysql-select] Rockets List: ", result);
    })
    this.rocketservice.getConsulta2(this.id_sql).subscribe(result =>{
      if(result.hasOwnProperty("error")){
        this.error2 = result["error"];
        //console.log("[app-mysql-select] Rockets List: ", this.error2);
      }else{
        this.rockets2 = result;
      }
    })
    this.rocketservice.getConsulta3(this.id_sql).subscribe(result =>{
      if(result.hasOwnProperty("error")){
        this.error3 = result["error"];
        //console.log("[app-mysql-select] Rockets List: ", this.error1);
      }else{
        this.rockets3 = result;
      }
    })
  }
}
