import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarnetVacunacion } from './carnet-vacunacion';

describe('CarnetVacunacion', () => {
  let component: CarnetVacunacion;
  let fixture: ComponentFixture<CarnetVacunacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarnetVacunacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarnetVacunacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
