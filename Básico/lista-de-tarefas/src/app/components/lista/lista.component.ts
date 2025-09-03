import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Tarefas = {
  id: number,
  descricao: string,
  nivelDeDificuldade: string,
  corFundo: string
}

@Component({
  selector: 'app-lista',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {
  
  tarefas: Array<Tarefas> = []

  descIpt: string = "";
  dificultIpt: string = "";

  adicionarNovaTarefa (): void {
    var tam = this.tarefas.length;
    this.tarefas.push( {id: tam + 1, descricao: this.descIpt, nivelDeDificuldade: this.dificultIpt, corFundo: "rgb(252, 190, 190)"} );
  }

  marcarConcluida (idTarefa: number): void {
    const marcar = this.tarefas.find(t => t.id == idTarefa);
    if (marcar) {
      marcar.corFundo = 'rgb(196, 236, 136)';
    }
  }

  removerTarefa (idTarefa: number): void {
    const index = this.tarefas.findIndex(t => t.id == idTarefa);
    if (index !== -1) {
      this.tarefas.splice(index, 1);
    }    
  }
}
