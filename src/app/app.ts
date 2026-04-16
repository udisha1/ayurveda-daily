import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Niche wali 2 lines add karein (path apne folder ke hisaab se check kar lein)
import { NavbarComponent } from './components/navbar/navbar'; 
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  // IMPORTS array mein Navbar aur Footer zaroor daalein
  imports: [RouterOutlet, NavbarComponent, FooterComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  title = 'ayurveda-daily';
}