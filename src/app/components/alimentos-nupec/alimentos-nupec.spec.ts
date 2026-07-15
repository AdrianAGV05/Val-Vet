import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlimentosNupec } from './alimentos-nupec';

describe('AlimentosNupec', () => {
  let component: AlimentosNupec;
  let fixture: ComponentFixture<AlimentosNupec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlimentosNupec]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlimentosNupec);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
