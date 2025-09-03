import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-relogio',
  imports: [
    CommonModule
  ],
  templateUrl: './relogio.component.html',
  styleUrl: './relogio.component.css'
})
export class RelogioComponent {
  horaAtual: Date = new Date();
  private intervalo: any;

  ngOnInit(): void {    
    this.intervalo = setInterval (() => {
      this.atualizarHora();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervalo) {
      clearInterval(this.intervalo);
    }
  }

  atualizarHora(): void {
    this.horaAtual = new Date();
  }
}
