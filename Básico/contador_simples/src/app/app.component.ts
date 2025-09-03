import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ContadorComponent } from './components/contador/contador.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLink,
    ContadorComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'contador_simples';
}
