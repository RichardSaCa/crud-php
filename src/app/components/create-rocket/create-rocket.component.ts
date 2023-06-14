import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rockets, createRocketDTO } from 'src/app/models/rocket.model';
import { RocketService } from 'src/app/services/rocket.service';

@Component({
  selector: 'app-create-rocket',
  templateUrl: './create-rocket.component.html',
  styleUrls: ['./create-rocket.component.scss'],
})
export class CreateRocketComponent {
  rocket: createRocketDTO = {
    rocket_id: '',
    name: '',
    type: '',
    active: '',
    country: '',
    company: '',
    cost_per_launch: 0,
  };
  message: String="";
  rockets: Array<Rockets>;
  form = this.formBuilder.nonNullable.group({
    rocket_id: ['', [Validators.required]],
    name: ['', [Validators.required]],
    type: ['', [Validators.required]],
    active: ['', [Validators.required]],
    country: ['', [Validators.required]],
    company: ['', [Validators.required]],
    cost_per_launch: [[Validators.required, Validators.pattern('^[0-9]*$')]],
  });

  idrocket: String = '';
  titulo: String = '';



  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private rocketservice: RocketService
  ) {
    this.rockets = [];
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.idrocket = params['id'];
      //this.rocket = params['rocket'];
      console.log("ejemplo "+this.idrocket);
    });
    if(this.idrocket){
      this.titulo = "Actualizar";
      this.rocketservice.getRockets().subscribe(data => {
        //data = JSON.parse(data);
        this.rockets = JSON.parse(data);
        this.rockets.forEach(element => {
          if(element.rocket_id === this.idrocket){
            this.rocket = element;
            console.log("entra al ifff")
            return;
          }
        });

        //let result = this.data1.filter(element => element.rocket_id === );
       // this.rocket = result[0];
      });

    }else{
      this.titulo = "Crear";
      this.rocket = {
        rocket_id: '',
    name: '',
    type: '',
    active: '',
    country: '',
    company: '',
    cost_per_launch: 0,
      }
    }

    //console.log("rocketrs: ",this.rocket);
  }

  createUpdateRocket() {
    this.route.queryParams.subscribe((params) => {
      this.idrocket = params['id'];
      this.rocket = params['rocket'];
    });
    if (this.rocket) {
      const {
        rocket_id,
        name,
        type,
        active,
        country,
        company,
        cost_per_launch,
      } = this.form.getRawValue();
      this.rocket = {
        rocket_id: rocket_id,
        name: name,
        type: type,
        active: active,
        country: country,
        company: company,
        cost_per_launch: cost_per_launch,
      };
      this.rocketservice.updateRocket(this.rocket).subscribe((response) => {
        try {
          JSON.parse(response);
          this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
            this.router.navigate(['/index']);
          });
        } catch (error) {
          console.log("inside error try catch")
          this.message = response.toString();
        }
      });

    }else{
      console.log(this.rocket);
      const { rocket_id, name, type, active, country, company, cost_per_launch } =
        this.form.getRawValue();
      this.rocket = {
        rocket_id: rocket_id,
        name: name,
        type: type,
        active: active,
        country: country,
        company: company,
        cost_per_launch: cost_per_launch,
      };

      this.rocketservice.createRocket(this.rocket).subscribe((response) => {
        try {
          JSON.parse(response);
          this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
            this.router.navigate(['/index']);
          });
        } catch (error) {
          console.log("inside error try catch")
          this.message = response.toString();
        }

      });
    }
  }

  back() {
    this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
      this.router.navigate(['/index']);
    });
  }
}
