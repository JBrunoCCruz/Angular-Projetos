import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotaoAlternaComponent } from './components/botao-alterna/botao-alterna.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    BotaoAlternaComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  appTheme = "beige"; // red

  onChangeTheme() {
    if (this.appTheme == "beige") {
      this.appTheme = "darkslategrey";
    } else if (this.appTheme == "darkslategrey") {
      this.appTheme = "beige";
    }
  }
}
