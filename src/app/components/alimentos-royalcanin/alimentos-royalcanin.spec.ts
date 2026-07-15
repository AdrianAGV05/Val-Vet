import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { AlimentosRoyalCanin } from './alimentos-royalcanin';

describe('AlimentosRoyalCanin', () => {
  let component: AlimentosRoyalCanin;
  let fixture: ComponentFixture<AlimentosRoyalCanin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimentosRoyalCanin],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentosRoyalCanin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
