import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ REQUIRED
  templateUrl: './home.html',
  styleUrls: ['./home.css'] // ✅ CONNECT CSS
})
export class HomeComponent {
}