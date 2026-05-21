import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NewsletterSubscriptionComponent } from '../newsletter/newsletter-subscription';

interface FooterLink {
  label: string;
  path: string;
}

interface SocialLink {
  label: string;
  href: string;
  iconPath: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule, NewsletterSubscriptionComponent],
  templateUrl: './footer.html',
  styleUrls: ['./footer.css'],
})
export class FooterComponent {
  readonly year = new Date().getFullYear();

  readonly quickLinks: readonly FooterLink[] = [
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'Daily Tips', path: '/tips' },
    { label: 'Recipes', path: '/recipes' },
  ];

  readonly resourceLinks: readonly FooterLink[] = [
    { label: 'Dosha Test', path: '/dosha-test' },
    { label: 'Blog', path: '/blog' },
    { label: 'Privacy Policy', path: '/privacy' },
    { label: 'Terms of Service', path: '/terms' },
  ];

  readonly socialLinks: readonly SocialLink[] = [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com',
      iconPath:
        'M13.5 21v-7h2.35l.4-3h-2.75V9.08c0-.87.24-1.46 1.49-1.46H16.4V4.98a19.17 19.17 0 0 0-2.05-.1c-2.03 0-3.43 1.24-3.43 3.52V11H8.6v3h2.32v7Z',
    },
    {
      label: 'Twitter',
      href: 'https://www.twitter.com',
      iconPath:
        'M18.9 2H22l-6.78 7.75L23.2 22h-6.27l-4.9-6.43L6.4 22H3.3l7.25-8.29L.8 2h6.42l4.43 5.9L18.9 2Zm-1.1 18h1.74L6.3 3.9H4.43Z',
    },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com',
      iconPath:
        'M7.25 2h9.5A5.25 5.25 0 0 1 22 7.25v9.5A5.25 5.25 0 0 1 16.75 22h-9.5A5.25 5.25 0 0 1 2 16.75v-9.5A5.25 5.25 0 0 1 7.25 2Zm0 1.5A3.76 3.76 0 0 0 3.5 7.25v9.5a3.76 3.76 0 0 0 3.75 3.75h9.5a3.76 3.76 0 0 0 3.75-3.75v-9.5a3.76 3.76 0 0 0-3.75-3.75h-9.5ZM17.5 6.38a1.12 1.12 0 1 1 0 2.24 1.12 1.12 0 0 1 0-2.24ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5A3.5 3.5 0 1 0 12 15.5 3.5 3.5 0 0 0 12 8.5Z',
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com',
      iconPath:
        'M21.58 7.19a2.8 2.8 0 0 0-1.97-1.98C17.88 4.75 12 4.75 12 4.75s-5.88 0-7.61.46a2.8 2.8 0 0 0-1.97 1.98A29.36 29.36 0 0 0 2 12a29.36 29.36 0 0 0 .42 4.81 2.8 2.8 0 0 0 1.97 1.98c1.73.46 7.61.46 7.61.46s5.88 0 7.61-.46a2.8 2.8 0 0 0 1.97-1.98A29.36 29.36 0 0 0 22 12a29.36 29.36 0 0 0-.42-4.81ZM10 15.52V8.48L16 12Z',
    },
  ];
}
