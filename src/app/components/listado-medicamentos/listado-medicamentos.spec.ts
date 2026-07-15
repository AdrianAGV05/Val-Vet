import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoMedicamentos } from './listado-medicamentos';

describe('ListadoMedicamentos', () => {
  let component: ListadoMedicamentos;
  let fixture: ComponentFixture<ListadoMedicamentos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoMedicamentos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoMedicamentos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
