import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaCita } from './agenda-cita';

describe('AgendaCita', () => {
  let component: AgendaCita;
  let fixture: ComponentFixture<AgendaCita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendaCita]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendaCita);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
