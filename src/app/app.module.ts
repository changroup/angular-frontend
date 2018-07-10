import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { InputsModule, WavesModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './components/login/login.component';
import { DetailComponent } from './components/detail/detail.component';
import { EntryComponent } from './components/entry/entry.component';

const routes: Routes = [
    {
        path: 'login', 
        component: LoginComponent 
    },
    {
        path: 'detail',
        component: DetailComponent
    },
    {
        path: 'entry',
        component: EntryComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DetailComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})



export class AppModule { }
