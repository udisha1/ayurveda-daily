import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-to-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-to-top.html',
  styleUrl: './scroll-to-top.css'
})
export class ScrollToTopComponent {

  showButton = false;

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showButton = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}