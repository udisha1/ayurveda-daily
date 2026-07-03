import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutineComponent } from './routine';

describe('RoutineComponent', () => {
  let component: RoutineComponent;
  let fixture: ComponentFixture<RoutineComponent>;

  beforeEach(async () => {
    localStorage.clear();

    await TestBed.configureTestingModule({
      imports: [RoutineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toggle completion and persist it for the current day', () => {
    const item = component.phases.morning[0];

    expect(component.isCompleted(item)).toBeFalse();

    component.toggleCompletion(item);
    fixture.detectChanges();

    expect(component.isCompleted(item)).toBeTrue();
    expect(localStorage.getItem(component.getStorageKey())).toContain('Wake Before Sunrise');
  });

  it('should restore completions from localStorage for the current day', () => {
    const item = component.phases.morning[0];
    localStorage.setItem(component.getStorageKey(), JSON.stringify({ 'morning:Wake Before Sunrise': true }));

    fixture = TestBed.createComponent(RoutineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    expect(component.isCompleted(item)).toBeTrue();
  });
});
