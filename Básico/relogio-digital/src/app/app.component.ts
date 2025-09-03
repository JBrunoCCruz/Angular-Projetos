import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RelogioComponent } from './components/relogio/relogio.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RelogioComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'relogio-digital';
}
