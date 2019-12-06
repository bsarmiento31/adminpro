import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {


  graficos: any = {
    'grafico1': {
      'labels': ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
      'data':  [
        [350, 450, 100],
        [50, 150, 120],
        [250, 130, 70],
      ],
      'type': 'doughnut',
      'leyenda': 'El pan se come con'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres','Unisex'],
      'data':  [
        [350, 450, 100],
        [50, 150, 120],
        [250, 130, 70],
      ],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'labels': ['Si', 'No','No Sabe'],
      'data':  [
        [350, 450, 100],
        [50, 150, 120],
        [250, 130, 70],
      ],
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?'
    },
    'grafico4': {
      'labels': ['No', 'Si','No Sabe'],
      'data':  [
        [350, 450, 100],
        [50, 150, 120],
        [250, 130, 70],
      ],
      'type': 'doughnut',
      'leyenda': '¿Le importa que le den gases?'
    },
  };

  constructor() { }

  ngOnInit() {
  }

}
