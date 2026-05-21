import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren,
  inject,
} from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { Subscription, filter } from 'rxjs';

interface NavItem {
  label: string;
  path: string;
  exact?: boolean;
}

let navbarInstanceCounter = 0;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class NavbarComponent implements OnDestroy {
  private readonly router = inject(Router);
  private readonly hostElement = inject(ElementRef<HTMLElement>);
  private readonly routerEventsSubscription: Subscription;
  private previousBodyOverflow = '';

  @ViewChild('menuToggleButton') private readonly menuToggleButton?: ElementRef<HTMLButtonElement>;
  @ViewChildren('menuLink') private readonly menuLinks?: QueryList<ElementRef<HTMLAnchorElement>>;

  readonly navigationId = `primary-navigation-${++navbarInstanceCounter}`;
  readonly navItems: readonly NavItem[] = [
    { label: 'Home', path: '/', exact: true },
    { label: 'Daily Tips', path: '/tips' },
    { label: 'Recipes', path: '/recipes' },
    { label: 'Dosha Test', path: '/dosha-test' },
    { label: 'About', path: '/about' },
  ];

  isMenuOpen = false;
  isScrolled = false;

  constructor() {
    this.routerEventsSubscription = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        this.closeMenu(false);
      });

    this.updateScrolledState();
  }

  ngOnDestroy(): void {
    this.routerEventsSubscription.unsubscribe();
    this.unlockBodyScroll();
  }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.updateScrolledState();
  }

  @HostListener('window:resize')
  onWindowResize(): void {
    if (window.innerWidth > 768) {
      this.closeMenu(false);
    }
  }

  @HostListener('document:keydown.escape')
  onEscapeKey(): void {
    if (this.isMenuOpen) {
      this.closeMenu(true);
    }
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const target = event.target;

    if (!this.isMenuOpen || !(target instanceof Node)) {
      return;
    }

    if (!this.hostElement.nativeElement.contains(target)) {
      this.closeMenu(false);
    }
  }

  toggleMenu(): void {
    if (this.isMenuOpen) {
      this.closeMenu(true);
      return;
    }

    this.previousBodyOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    this.isMenuOpen = true;

    queueMicrotask(() => {
      this.menuLinks?.first?.nativeElement.focus();
    });
  }

  closeMenu(restoreFocus: boolean): void {
    if (!this.isMenuOpen) {
      return;
    }

    this.isMenuOpen = false;
    this.unlockBodyScroll();

    if (restoreFocus) {
      queueMicrotask(() => {
        this.menuToggleButton?.nativeElement.focus();
      });
    }
  }

  onMenuItemClick(): void {
    this.closeMenu(false);
  }

  private unlockBodyScroll(): void {
    document.body.style.overflow = this.previousBodyOverflow;
  }

  private updateScrolledState(): void {
    this.isScrolled = window.scrollY > 16;
  }
}
