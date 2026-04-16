import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Remedies } from './remedies';

describe('Remedies', () => {
  let component: Remedies;
  let fixture: ComponentFixture<Remedies>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Remedies],
    }).compileComponents();

    fixture = TestBed.createComponent(Remedies);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
