import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbsComponent } from './herbs';

describe('Herbs', () => {
  let component: HerbsComponent;
  let fixture: ComponentFixture<HerbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerbsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HerbsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
