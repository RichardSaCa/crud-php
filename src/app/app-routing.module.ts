import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

import { NavComponent } from './components/nav/nav.component';
//----canActivate para proteger las rutas---
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { IndexComponent } from './components/index/index.component';
import { CreateRocketComponent } from './components/create-rocket/create-rocket.component';
;


const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'index', component: IndexComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))
  },
  {
    path: 'createRocket', component: CreateRocketComponent, ...canActivate(()=> redirectUnauthorizedTo(['/login']))
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
