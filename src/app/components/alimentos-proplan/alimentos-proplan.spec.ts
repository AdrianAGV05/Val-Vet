import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProvideRouter } from '@angular/router';
import { AlimentosProplan } from './alimentos-proplan';
import { provideRouter } from '@angular/router';

describe('AlimentosProplan', () => {
  let component: AlimentosProplan;
  let fixture: ComponentFixture<AlimentosProplan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimentosProplan],
      providers: [
        provideRouter([])
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentosProplan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
