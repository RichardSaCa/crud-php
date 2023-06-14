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
  valores: any;
  rockets: Array<Rockets>;
  iduser: String="";
  idlistCompra: String="";
  flag: boolean=true;
  flagDelete: boolean=true;
  message: String="";

  constructor(private rocketservice: RocketService, private router: Router, private route: ActivatedRoute){
    this.rockets = [];
  }

  ngOnInit(): void{
    this.rocketservice.getRockets().subscribe(response =>{
      //this.rockets = JSON.parse(response);
        try {
          JSON.parse(response);
          this.rockets = JSON.parse(response);
        } catch (error) {
          this.message = response;
        }
     });

  }
//--METHODS--
  addRocket(){
    this.router.navigate(['createRocket']);
  }
  updateRocket(idrocket: any, rocket:Rockets){
    this.router.navigate(["/createRocket"], { queryParams: { id: idrocket, rocket: rocket }});
  }
  deleteRocket(rocket: Rockets){
    this.rocketservice.deleteRocket(rocket).subscribe(data =>{
      this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
        this.router.navigate(['/index']);
      });
     });
  }



}
