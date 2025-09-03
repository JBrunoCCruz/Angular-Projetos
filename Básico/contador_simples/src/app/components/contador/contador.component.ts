import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {
  contador: number = 0;

  aumentar (): void {
    if (this.contador < 1000) {
      this.contador = this.contador + 1;
    }    
  }

  diminuir (): void {
    if (this.contador > -1000) {
      this.contador = this.contador - 1;
    }    
  }

  resetar () {
    this.contador = 0;
  }
}
