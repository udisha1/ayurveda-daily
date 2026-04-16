import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Herbs } from './herbs';

describe('Herbs', () => {
  let component: Herbs;
  let fixture: ComponentFixture<Herbs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Herbs],
    }).compileComponents();

    fixture = TestBed.createComponent(Herbs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
