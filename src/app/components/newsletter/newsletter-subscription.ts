import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';

type FeedbackType = '' | 'success' | 'error';
type Theme = 'light' | 'dark';

let newsletterInstanceCounter = 0;

@Component({
  selector: 'app-newsletter-subscription',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter-subscription.html',
  styleUrls: ['./newsletter-subscription.css'],
})
export class NewsletterSubscriptionComponent implements OnDestroy {
  private readonly newsletterService = inject(NewsletterService);
  private feedbackTimerId: number | null = null;

  @Input() title = 'Join our newsletter';
  @Input() description =
    'Get thoughtful updates, wellness tips, and curated reads sent to your inbox.';
  @Input() placeholder = 'Enter your email';
  @Input() buttonLabel = 'Subscribe';
  @Input() successMessage = 'You are subscribed. Please check your inbox for updates.';
  @Input() errorMessage = 'Something went wrong. Please try again in a moment.';
  @Input() theme: Theme = 'light';

  readonly instanceId = ++newsletterInstanceCounter;

  email = '';
  emailError = '';
  feedbackType: FeedbackType = '';
  feedbackMessage = '';
  isSubmitting = false;

  get titleId(): string {
    return `newsletter-title-${this.instanceId}`;
  }

  get emailInputId(): string {
    return `newsletter-email-${this.instanceId}`;
  }

  get emailErrorId(): string {
    return `newsletter-email-error-${this.instanceId}`;
  }

  get feedbackId(): string {
    return `newsletter-feedback-${this.instanceId}`;
  }

  get describedBy(): string | null {
    const ids = [
      this.emailError ? this.emailErrorId : '',
      this.feedbackMessage ? this.feedbackId : '',
    ].filter(Boolean);

    return ids.length ? ids.join(' ') : null;
  }

  ngOnDestroy(): void {
    this.clearFeedbackTimer();
  }

  onEmailInput(): void {
    if (this.emailError) {
      this.emailError = this.validateEmail(this.email);
    }
  }

  async onSubmit(): Promise<void> {
    if (this.isSubmitting) {
      return;
    }

    const validationMessage = this.validateEmail(this.email);

    if (validationMessage) {
      this.emailError = validationMessage;
      this.clearFeedback();
      return;
    }

    this.isSubmitting = true;
    this.emailError = '';
    this.clearFeedback();

    try {
      await this.newsletterService.subscribe(this.email.trim());
      this.email = '';
      this.setFeedback('success', this.successMessage);
    } catch (error: unknown) {
      const message = error instanceof Error && error.message ? error.message : this.errorMessage;
      this.setFeedback('error', message);
    } finally {
      this.isSubmitting = false;
    }
  }

  private validateEmail(value: string): string {
    return this.newsletterService.validateEmail(value);
  }

  private setFeedback(type: FeedbackType, message: string): void {
    this.clearFeedbackTimer();
    this.feedbackType = type;
    this.feedbackMessage = message;

    if (!message) {
      return;
    }

    // Keep the UI self-resetting so success and error states do not linger forever.
    this.feedbackTimerId = window.setTimeout(() => {
      this.clearFeedback();
    }, 5000);
  }

  private clearFeedback(): void {
    this.clearFeedbackTimer();
    this.feedbackType = '';
    this.feedbackMessage = '';
  }

  private clearFeedbackTimer(): void {
    if (this.feedbackTimerId !== null) {
      window.clearTimeout(this.feedbackTimerId);
      this.feedbackTimerId = null;
    }
  }
}
