import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AlimentosGanador } from './alimentos-ganador';

describe('AlimentosGanador', () => {
  let component: AlimentosGanador;
  let fixture: ComponentFixture<AlimentosGanador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimentosGanador],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentosGanador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
