import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Doshas } from './doshas';

describe('Doshas', () => {
  let component: Doshas;
  let fixture: ComponentFixture<Doshas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Doshas],
    }).compileComponents();

    fixture = TestBed.createComponent(Doshas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
