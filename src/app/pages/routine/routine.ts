import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface RoutineItem {
  time: string;
  dot: string;
  tag: string;
  icon: string;
  title: string;
  desc: string;
  benefit: string;
}

type RoutinePhase = 'morning' | 'day' | 'evening';

type RoutinePhases = Record<RoutinePhase, RoutineItem[]>;

@Component({
  selector: 'app-routine',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './routine.html',
  styleUrls: ['./routine.css']
})
export class RoutineComponent implements OnInit {
  activePhase: RoutinePhase = 'morning';
  completedItems: Record<string, boolean> = {};

  phases: RoutinePhases = {
    morning: [
      { time:'4:30–5:00', dot:'#D4930F', tag:'Brahma Muhurta', icon:'🌌', title:'Wake Before Sunrise', desc:'The hour before sunrise...', benefit:'Heightened clarity...' }
    ],
    day: [
      { time:'8:00–12:00', dot:'#2D5A27', tag:'Karma', icon:'💼', title:'Peak Work Hours', desc:'As Kapha transitions...', benefit:'Optimal cognitive performance...' }
    ],
    evening: [
      { time:'6:00–6:30', dot:'#5C3317', tag:'Sandhya', icon:'🌇', title:'Evening Walk', desc:'A gentle sunset walk...', benefit:'Lowers cortisol...' }
    ]
  };

  ngOnInit(): void {
    this.loadCompletionState();
  }

  setPhase(phase: RoutinePhase): void {
    this.activePhase = phase;
  }

  toggleCompletion(item: RoutineItem, phase: RoutinePhase = this.activePhase): void {
    const key = this.getItemKey(phase, item.title);
    this.completedItems[key] = !this.completedItems[key];
    this.persistCompletionState();
  }

  isCompleted(item: RoutineItem, phase: RoutinePhase = this.activePhase): boolean {
    return !!this.completedItems[this.getItemKey(phase, item.title)];
  }

  getStorageKey(): string {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `routine-completions:${year}-${month}-${day}`;
  }

  private getItemKey(phase: RoutinePhase, title: string): string {
    return `${phase}:${title}`;
  }

  private loadCompletionState(): void {
    const state = this.readStoredState(this.getStorageKey());
    this.completedItems = state ?? {};
  }

  private persistCompletionState(): void {
    if (typeof window === 'undefined') {
      return;
    }

    window.localStorage.setItem(this.getStorageKey(), JSON.stringify(this.completedItems));
  }

  private readStoredState(key: string): Record<string, boolean> | null {
    if (typeof window === 'undefined') {
      return null;
    }

    const storedValue = window.localStorage.getItem(key);

    if (!storedValue) {
      return null;
    }

    try {
      const parsed = JSON.parse(storedValue) as Record<string, boolean> | null;
      return parsed && typeof parsed === 'object' ? parsed : null;
    } catch {
      return null;
    }
  }
}