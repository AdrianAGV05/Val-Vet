import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ServiciosVacunas } from './servicios-vacunas';

describe('ServiciosVacunas', () => {
  let component: ServiciosVacunas;
  let fixture: ComponentFixture<ServiciosVacunas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosVacunas],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosVacunas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
