import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

export interface ContentCard {
  title: string;
  body: string;
}

export interface ContentPageData {
  eyebrow: string;
  title: string;
  description: string;
  cards: ContentCard[];
  ctaLabel?: string;
  ctaLink?: string;
  ctaExternal?: boolean;
}

const DEFAULT_PAGE: ContentPageData = {
  eyebrow: 'Ayurveda Daily',
  title: 'Content coming soon',
  description: 'We are still preparing this page.',
  cards: [],
};

@Component({
  selector: 'app-content-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './content-page.html',
  styleUrls: ['./content-page.css'],
})
export class ContentPageComponent {
  private readonly route = inject(ActivatedRoute);

  readonly pageData: ContentPageData = {
    ...DEFAULT_PAGE,
    ...(this.route.snapshot.data as Partial<ContentPageData>),
  };
}
