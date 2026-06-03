import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {
  isScrolled = false;
  menuOpen = false;

  // Toggles the mobile burger menu dropdown view state
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  // Closes the menu automatically when clicking a navigation link
  closeMenu() {
    this.menuOpen = false;
  }

  // Listens to window scroll events to update styling dynamically
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }
}