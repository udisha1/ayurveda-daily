import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./routine.css']
})
export class RoutineComponent implements OnInit, OnDestroy {
  activePhase = 'morning';

  completedStates: { [key: string]: boolean } = {};
  storageKey = '';

  stopwatchActive = false;
  timeElapsed = 0;
  timerIntervalInstance: any;
  formattedDisplayTime = '00:00';

  currentClock = '';
  private clockInterval: any;

  readonly CIRCUMFERENCE = 615.75;
  ringOffset = this.CIRCUMFERENCE;
  gnomonAngle = 0;

  ticks: { x1: number; y1: number; x2: number; y2: number; major: boolean }[] = [];

  phases: any = {
    morning: [
      {
  time:'4:30–5:00',
  dot:'#D4930F',
  tag:'Brahma Muhurta',
  icon:'🌌',
  title:'Wake Before Sunrise',
  desc:'The hour before sunrise...',
  benefit:'Heightened clarity...',
  recommendations: [
  '💧 Drink warm water',
  '🧘 Meditation & Pranayama',
  '📔 Journal or plan the day'
]
}
    ],
    day: [
      {
  time:'8:00–12:00',
  dot:'#2D5A27',
  tag:'Karma',
  icon:'💼',
  title:'Peak Work Hours',
  desc:'As Kapha transitions...',
  benefit:'Optimal cognitive performance...',
  recommendations: [
  '💼 Deep work',
  '📚 Focused study',
  '💧 Hydration breaks',
  '🥗 Mindful eating'
]
}
    ],
    evening: [
      {
  time:'6:00–6:30',
  dot:'#5C3317',
  tag:'Sandhya',
  icon:'🌇',
  title:'Evening Walk',
  desc:'A gentle sunset walk...',
  benefit:'Lowers cortisol...',
  recommendations: [
  '🚶 Gentle walk',
  '📵 Reduce screen time',
  '🍲 Light dinner',
  '🙏 Relaxation or gratitude'
]
}
      // Baaki evening items
    ]
  };

  ngOnInit() {
    this.storageKey = this.getTodayStorageKey();
    this.loadCompletedStates();
    this.buildTicks();
    this.updateClock();
    this.clockInterval = setInterval(() => this.updateClock(), 1000);
  }

  ngOnDestroy() {
    this.clearTimerTrackers();
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
    }
  }

  private updateClock() {
    const now = new Date();
    const pad = (v: number) => (v < 10 ? '0' + v : String(v));
    this.currentClock = `${pad(now.getHours())}:${pad(now.getMinutes())}`;
  }

  private buildTicks() {
    const center = 120;
    const outer = 112;
    for (let i = 0; i < 60; i++) {
      const angle = (i / 60) * 360;
      const major = i % 5 === 0;
      const rad = (angle - 90) * (Math.PI / 180);
      const rInner = major ? outer - 10 : outer - 5;
      this.ticks.push({
        x1: center + rInner * Math.cos(rad),
        y1: center + rInner * Math.sin(rad),
        x2: center + outer * Math.cos(rad),
        y2: center + outer * Math.sin(rad),
        major
      });
    }
  }

  getTodayStorageKey(): string {
    const today = new Date();
    return `ayurveda_routine_${today.getFullYear()}_${today.getMonth() + 1}_${today.getDate()}`;
  }

  loadCompletedStates() {
    const saved = localStorage.getItem(this.storageKey);
    if (saved) {
      this.completedStates = JSON.parse(saved);
    }
  }

  toggleItemCompletion(id: string) {
    this.completedStates[id] = !this.completedStates[id];
    localStorage.setItem(this.storageKey, JSON.stringify(this.completedStates));
  }

  setPhase(phase: string) {
    this.activePhase = phase;
  }

  toggleSadhanaTimer() {
    if (this.stopwatchActive) {
      this.clearTimerTrackers();
    } else {
      this.stopwatchActive = true;
      this.timerIntervalInstance = setInterval(() => {
        this.timeElapsed++;
        this.renderFormattedTime();
      }, 1000);
    }
  }

  resetSadhanaTimer() {
    this.clearTimerTrackers();
    this.timeElapsed = 0;
    this.renderFormattedTime();
  }

  private clearTimerTrackers() {
    this.stopwatchActive = false;
    if (this.timerIntervalInstance) {
      clearInterval(this.timerIntervalInstance);
    }
  }

  private renderFormattedTime() {
    const minutes = Math.floor(this.timeElapsed / 60);
    const seconds = this.timeElapsed % 60;
    const pad = (val: number) => (val < 10 ? '0' + val : String(val));
    this.formattedDisplayTime = `${pad(minutes)}:${pad(seconds)}`;

    const secFraction = (this.timeElapsed % 60) / 60;
    this.ringOffset = this.CIRCUMFERENCE - secFraction * this.CIRCUMFERENCE;
    this.gnomonAngle = secFraction * 360;
  }
}