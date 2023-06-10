import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Rockets, createRocketDTO } from 'src/app/models/rocket.model';

@Component({
  selector: 'app-create-rocket',
  templateUrl: './create-rocket.component.html',
  styleUrls: ['./create-rocket.component.scss'],
})
export class CreateRocketComponent {
  form = this.formBuilder.nonNullable.group({
    rocket_id: ['', [Validators.required]],
    name: ['', [Validators.required]],
    type: ['', [Validators.required]],
    active: ['', [Validators.required]],
    country: ['', [Validators.required]],
    company: ['', [Validators.required]],
    cost_per_launch: [0, [Validators.required]],
  });

  rocket: createRocketDTO = {
    rocket_id: '',
    name: '',
    type: '',
    active: '',
    country: '',
    company: '',
    cost_per_launch: 0
  };

  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {}

  createUpdateRocket() {
    console.log(this.rocket);
    const {rocket_id, name, type, active, country, company, cost_per_launch} = this.form.getRawValue();
    this.rocket ={
      rocket_id: rocket_id,
    name: name,
    type: type,
    active: active,
    country: country,
    company: company,
    cost_per_launch: cost_per_launch
    }
  }

  back(){
    this.router.navigate(['index']);
  }
}
