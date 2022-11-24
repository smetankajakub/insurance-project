import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarRegistrationPageComponent } from './car-registration-page/car-registration-page.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
	{
		path: '',
		component: CarRegistrationPageComponent
	}
];
@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CarRegistrationRoutingModule { }
