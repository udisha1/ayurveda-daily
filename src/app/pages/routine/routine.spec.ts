import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Routine } from './routine';

describe('Routine', () => {
  let component: Routine;
  let fixture: ComponentFixture<Routine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Routine],
    }).compileComponents();

    fixture = TestBed.createComponent(Routine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
