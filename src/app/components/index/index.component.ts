import { Component } from '@angular/core';
import { Rockets } from 'src/app/models/rocket.model';
import { RocketService } from 'src/app/services/rocket.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {

  //--VARIABLES--
  valores: any;
  rockets: Array<Rockets>;
  iduser: String="";
  idlistCompra: String="";
  flag: boolean=true;
  flagDelete: boolean=true;

  constructor(
    private rocketservice: RocketService,
    private router: Router,
    private route: ActivatedRoute
  ){
    this.rockets = [];
  }

  ngOnInit(): void{
    this.rocketservice.getRockets().subscribe(result =>{
      this.rockets = result;
      //console.log("[app-index] Rockets List: ", this.rockets);
    })
  }


  //--METHODS--
  addRocket(){
    this.router.navigate(['createRocket']);
  }
  updateRocket(idrocket: any, rocket:Rockets){

  }
  deleteRocket(rocket: Rockets){

  }

}
