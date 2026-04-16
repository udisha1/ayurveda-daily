import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { REMEDIES, Remedy } from './remedies-data';

@Component({
  selector: 'app-remedies',
  templateUrl: './remedies.html',
  imports: [CommonModule],
  styleUrls: ['./remedies.css']
})
export class RemediesComponent {


  remedies: Remedy[] = REMEDIES;

  currentFilter: string = 'all';

  setFilter(category: string) {
    this.currentFilter = category;
  }

  get filteredRemedies(): Remedy[] {
    if (this.currentFilter === 'all') {
      return this.remedies;
    }
    return this.remedies.filter(r => r.cat === this.currentFilter);
  }
}