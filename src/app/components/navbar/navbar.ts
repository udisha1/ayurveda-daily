import { Component, AfterViewInit, HostListener, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent implements AfterViewInit {

  isScrolled = false;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    const nav = this.el.nativeElement.querySelector('nav');
    if (nav) {
      document.body.style.paddingTop = `${nav.offsetHeight}px`;
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.isScrolled = window.scrollY > 50;
    const nav = this.el.nativeElement.querySelector('nav');
    if (nav) {
      document.body.style.paddingTop = `${nav.offsetHeight}px`;
    }
  }

}
