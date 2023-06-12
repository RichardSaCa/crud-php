import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './components/nav/nav.component';

import { ImgComponent } from './components/img/img.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { IndexComponent } from './components/index/index.component';
import { CreateRocketComponent } from './components/create-rocket/create-rocket.component';
import { MysqlSelectComponent } from './components/mysql-select/mysql-select.component';
import { CurrencyPipe } from './pipes/currency.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ImgComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    CreateRocketComponent,
    MysqlSelectComponent,
    CurrencyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
