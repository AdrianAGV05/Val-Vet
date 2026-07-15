import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ServiciosEsteticas } from './servicios-esteticas';

describe('ServiciosEsteticas', () => {
  let component: ServiciosEsteticas;
  let fixture: ComponentFixture<ServiciosEsteticas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosEsteticas],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosEsteticas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
