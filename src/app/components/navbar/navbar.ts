import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit {

  isScrolled = false;
  menuOpen = false;

  ngOnInit(): void {
    // Initialization logic can go here
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}