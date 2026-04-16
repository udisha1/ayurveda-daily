import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-herbs',
  templateUrl: './herbs.html',
   imports: [CommonModule],
  styleUrls: ['./herbs.css']
})
export class HerbsComponent {
  currentFilter = 'all';
  currentSearch = '';

  herbs = [
    { name:'Ashwagandha', sanskrit:'Withania somnifera', icon:'🌿', bg:'#e8f4e1', accent:'#6B8F47', family:'Solanaceae', cat:['adaptogen'], rasa:'Bitter, Astringent, Sweet', virya:'Heating', vipaka:'Sweet', desc:'The most revered Ayurvedic adaptogen...', benefits:['Reduces cortisol','Builds stamina','Improves sleep','Thyroid support','Muscle strength'], uses:'1 tsp in warm milk at bedtime.', caution:'Avoid during pregnancy.', doshas:['V','K'] },
    // ... Paste your full herbs array here ...
  ];

  setFilter(cat: string) {
    this.currentFilter = cat;
  }

  onSearchChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.currentSearch = target.value.toLowerCase();
  }

  get filteredHerbs() {
    return this.herbs.filter(h => {
      const catMatch = this.currentFilter === 'all' || h.cat.includes(this.currentFilter);
      const searchMatch = !this.currentSearch || 
                          h.name.toLowerCase().includes(this.currentSearch) || 
                          h.sanskrit.toLowerCase().includes(this.currentSearch) || 
                          h.benefits.some(b => b.toLowerCase().includes(this.currentSearch));
      return catMatch && searchMatch;
    });
  }
}