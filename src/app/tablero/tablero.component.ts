import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.scss']
})
export class TableroComponent implements OnInit {

  cuadrados: any[] = []
  xEsProximo: boolean | undefined
  ganador: string | undefined

  constructor() { }

  ngOnInit(): void {
    this.nuevoJuego();
  }

  nuevoJuego() {
    this.cuadrados = Array(9).fill(null)
    this.ganador
    this.xEsProximo = true
    console.log('nuevo juego')
  }

  get jugador() {
    return this.xEsProximo ? 'X' : 'O'
  }

  hacerMovida(idx: number) {
    if (!this.cuadrados[idx]) {
      this.cuadrados.splice(idx, 1, this.jugador)
      this.xEsProximo = !this.xEsProximo
    }

    this.ganador = this.calcularGanador()

  }
  calcularGanador() {
    const lineas = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let i = 0; i < lineas.length; i++) {
      const [a, b, c] = lineas[i]
      if (this.cuadrados[a] && this.cuadrados[a] === this.cuadrados[b] &&
        this.cuadrados[a] === this.cuadrados[c]) {
        return this.cuadrados[a]
      }
    }

    return null
  }

}
