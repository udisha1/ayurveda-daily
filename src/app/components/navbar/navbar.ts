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
  healingMode = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleHealingMode() {
    this.healingMode = !this.healingMode;
    document.body.classList.toggle('healing-mode');
  }

  closeMenu() {
    this.menuOpen = false;
  }
}

