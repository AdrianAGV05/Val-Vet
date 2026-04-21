import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosMascota } from './datos-mascota';

describe('DatosMascota', () => {
  let component: DatosMascota;
  let fixture: ComponentFixture<DatosMascota>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosMascota]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosMascota);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
