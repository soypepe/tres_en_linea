import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cuadrado',
  template: `
    <button nbButton *ngIf="!valor">{{valor}}</button>
    <button nbButton hero status="success" *ngIf="valor == 'X'">{{valor}}</button>
    <button nbButton hero status="info" *ngIf="valor == 'O'">{{valor}}</button>
  `,
  styles: [
    'button{width:100%;height:100%;font-size:5rem !important;}'
  ]
})
export class CuadradoComponent {
  @Input() valor: 'X' | 'O' | undefined
  @Input() bloquear: boolean | undefined
}
