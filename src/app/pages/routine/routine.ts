import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-routine',
  templateUrl: './routine.html',
  imports: [CommonModule],
  styleUrls: ['./routine.css']
})
export class RoutineComponent {
  // Abhi konsa tab active hai
  activePhase = 'morning';

  // Aapka data
  phases: any = {
    morning: [
      { time:'4:30–5:00', dot:'#D4930F', tag:'Brahma Muhurta', icon:'🌌', title:'Wake Before Sunrise', desc:'The hour before sunrise...', benefit:'Heightened clarity...' },
      // Baaki morning items
    ],
    day: [
      { time:'8:00–12:00', dot:'#2D5A27', tag:'Karma', icon:'💼', title:'Peak Work Hours', desc:'As Kapha transitions...', benefit:'Optimal cognitive performance...' },
      // Baaki day items
    ],
    evening: [
      { time:'6:00–6:30', dot:'#5C3317', tag:'Sandhya', icon:'🌇', title:'Evening Walk', desc:'A gentle sunset walk...', benefit:'Lowers cortisol...' },
      // Baaki evening items
    ]
  };

  // Tab change karne ka function
  setPhase(phase: string) {
    this.activePhase = phase;
  }
}