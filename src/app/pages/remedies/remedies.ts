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
  }
}