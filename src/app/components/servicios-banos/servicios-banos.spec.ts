import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { ServiciosBanos } from './servicios-banos';

describe('ServiciosBanos', () => {
  let component: ServiciosBanos;
  let fixture: ComponentFixture<ServiciosBanos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosBanos],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosBanos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
