import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/core/models/car';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  cars: Car[] = [
    {
      brand: 'BMW',
      model: '5.0',
      km: '100',
      year: '2018',
      shift: 'automatic',
      fuel: 'benzin',
      color: 'black',
      car_type: 'sedan',
      e_car: false,
    },
    {
      brand: 'Mercedes',
      model: 'AMG',
      km: '0',
      year: '2019',
      shift: 'automatic',
      fuel: 'benzin',
      color: 'white',
      car_type: 'sedan',
      e_car: false,
    },
    {
      brand: 'Mercedes',
      model: 'AMG',
      km: '0',
      year: '2019',
      shift: 'automatic',
      fuel: 'benzin',
      color: 'white',
      car_type: 'sedan',
      e_car: false,
    },
    {
      brand: 'Mercedes',
      model: 'AMG',
      km: '0',
      year: '2019',
      shift: 'automatic',
      fuel: 'benzin',
      color: 'white',
      car_type: 'sedan',
      e_car: false,
    },
    {
      brand: 'Mercedes',
      model: 'AMG',
      km: '0',
      year: '2019',
      shift: 'automatic',
      fuel: 'benzin',
      color: 'white',
      car_type: 'sedan',
      e_car: false,
    },
    {
      brand: 'Mercedes',
      model: 'AMG',
      km: '0',
      year: '2019',
      shift: 'automatic',
      fuel: 'benzin',
      color: 'white',
      car_type: 'sedan',
      e_car: false,
    },
    {
      brand: 'Mercedes',
      model: 'AMG',
      km: '0',
      year: '2019',
      shift: 'automatic',
      fuel: 'benzin',
      color: 'white',
      car_type: 'sedan',
      e_car: false,
    },
    {
      brand: 'Mercedes',
      model: 'AMG',
      km: '0',
      year: '2019',
      shift: 'automatic',
      fuel: 'benzin',
      color: 'white',
      car_type: 'sedan',
      e_car: false,
    }
  ];
  constructor() {}

  public openNewCarModal(): void {
    // TODO: implement new modal with stepper
  }
  ngOnInit(): void {}
}
