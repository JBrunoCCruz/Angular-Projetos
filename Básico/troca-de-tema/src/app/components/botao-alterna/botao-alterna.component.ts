import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao-alterna',
  imports: [],
  templateUrl: './botao-alterna.component.html',
  styleUrl: './botao-alterna.component.css'
})
export class BotaoAlternaComponent {
  @Output() changeTheme: EventEmitter<any> = new EventEmitter();

  handleClick(): void {
    this.changeTheme.emit();
  }
}
