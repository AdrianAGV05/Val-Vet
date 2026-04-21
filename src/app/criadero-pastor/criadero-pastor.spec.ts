import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriaderoPastor } from './criadero-pastor';

describe('CriaderoPastor', () => {
  let component: CriaderoPastor;
  let fixture: ComponentFixture<CriaderoPastor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CriaderoPastor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriaderoPastor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
