import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarRegistrationPageComponent } from './car-registration-page.component';

describe('CarRegistrationPageComponent', () => {
  let component: CarRegistrationPageComponent;
  let fixture: ComponentFixture<CarRegistrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarRegistrationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarRegistrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
