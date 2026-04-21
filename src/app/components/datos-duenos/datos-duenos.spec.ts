import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDuenos } from './datos-duenos';

describe('DatosDuenos', () => {
  let component: DatosDuenos;
  let fixture: ComponentFixture<DatosDuenos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosDuenos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosDuenos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
