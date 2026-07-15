import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AlimentosHills } from './alimentos-hills';

describe('AlimentosHills', () => {
  let component: AlimentosHills;
  let fixture: ComponentFixture<AlimentosHills>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimentosHills],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentosHills);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
