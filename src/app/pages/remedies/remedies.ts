import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { REMEDIES, Remedy } from './remedies-data';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-remedies',
  standalone: true,
  templateUrl: './remedies.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./remedies.css']
  imports: [CommonModule],
  templateUrl: './remedies.html',
  styleUrls: ['./remedies.css']
  styleUrl: './remedies.css'
})
export class RemediesComponent {

  remedies: Remedy[] = REMEDIES;

  currentFilter: string = 'all';

  reviews: { [key: string]: any[] } = {};

  reviewInputs: {
    [key: string]: {
      nickname: string;
      comment: string;
    };
  } = {};
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

  ngOnInit() {
    this.loadReviews();

    this.remedies.forEach(remedy => {
      this.reviewInputs[remedy.title] = {
        nickname: '',
        comment: ''
      };
    });
  }

  loadReviews() {
    this.reviews = JSON.parse(
      localStorage.getItem('remedyReviews') || '{}'
    );
  }

  submitReview(remedyName: string) {
    const input = this.reviewInputs[remedyName];
    if (!input) return;

    if (!input?.comment?.trim()) return;

    const review = {
      name: input.nickname.trim() || 'Anonymous',
      comment: input.comment.trim(),
      date: new Date().toLocaleDateString()
    };

    if (!this.reviews[remedyName]) {
      this.reviews[remedyName] = [];
    }

    this.reviews[remedyName].unshift(review);

    localStorage.setItem(
      'remedyReviews',
      JSON.stringify(this.reviews)
    );

    this.reviewInputs[remedyName] = {
      nickname: '',
      comment: ''
    };
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