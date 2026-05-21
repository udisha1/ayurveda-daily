import { Injectable } from '@angular/core';

export interface NewsletterSubscriptionResponse {
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

@Injectable({
  providedIn: 'root',
})
export class NewsletterService {
  validateEmail(email: string): string {
    const normalizedEmail = email.trim();

    if (!normalizedEmail) {
      return 'Please enter your email address.';
    }

    if (!EMAIL_REGEX.test(normalizedEmail)) {
      return 'Please enter a valid email address.';
    }

    return '';
  }

  async subscribe(email: string): Promise<NewsletterSubscriptionResponse> {
    const validationMessage = this.validateEmail(email);

    // Validate at the service layer too so direct callers fail fast with a helpful message.
    if (validationMessage) {
      throw new Error(validationMessage);
    }

    let response: Response;

    try {
      response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });
    } catch {
      throw new Error('Unable to reach the subscription service. Please try again.');
    }

    let payload: NewsletterSubscriptionResponse | null = null;

    try {
      payload = (await response.json()) as NewsletterSubscriptionResponse;
    } catch {
      payload = null;
    }

    if (!response.ok) {
      const message =
        payload?.message && payload.message.trim()
          ? payload.message
          : 'Subscription failed. Please try again later.';

      throw new Error(message);
    }

    return payload ?? {};
  }
}
