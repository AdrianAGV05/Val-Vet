import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ServiciosDesparasitaciones } from './servicios-desparasitaciones';

describe('ServiciosDesparasitaciones', () => {
  let component: ServiciosDesparasitaciones;
  let fixture: ComponentFixture<ServiciosDesparasitaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosDesparasitaciones],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosDesparasitaciones);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
