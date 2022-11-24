import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarRegistrationPageComponent } from './car-registration-page/car-registration-page.component';
import { CarRegistrationRoutingModule } from './car-registration-routing.module';



@NgModule({
  declarations: [
    CarRegistrationPageComponent
  ],
  imports: [
    CommonModule,
    CarRegistrationRoutingModule
  ]
})
export class CarRegistrationModule { }
