import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { REMEDIES, Remedy } from './remedies-data';

@Component({
  selector: 'app-remedies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './remedies.html',
  styleUrls: ['./remedies.css']
})
export class RemediesComponent {

  remedies: Remedy[] = REMEDIES;

  currentFilter: string = 'all';

  copiedMessage: string = '';

  canNativeShare = !!navigator.share;

  setFilter(category: string) {
    this.currentFilter = category;
  }

  get filteredRemedies(): Remedy[] {
    if (this.currentFilter === 'all') {
      return this.remedies;
    }

    return this.remedies.filter(r => r.cat === this.currentFilter);
  }

  getShareText(remedy: Remedy): string {

    return `🌿 AyurvedaDaily Tip

${remedy.title}

Natural wellness support for ${remedy.cat_label}.

Discover this Ayurvedic remedy here:`;
  }

  getShareUrl(): string {
    return window.location.href;
  }

  shareWhatsApp(remedy: Remedy) {

    const text =
      `${this.getShareText(remedy)} ${this.getShareUrl()}`;

    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  }

  shareTwitter(remedy: Remedy) {

    const text =
      `${this.getShareText(remedy)} ${this.getShareUrl()}`;

    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  }


  async nativeShare(remedy: Remedy) {

    if (!navigator.share) return;

    try {

      await navigator.share({
        title: remedy.title,
        text: this.getShareText(remedy),
        url: this.getShareUrl()
      });

    } catch (error) {
      console.log('Share cancelled');
    }
  }
}