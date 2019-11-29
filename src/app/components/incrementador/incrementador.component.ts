import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @Input() progreso: number = 50;
  @Input('nombre') leyenda: string = 'Leyenda';

  @Output('actualizavalor') cambioValor: EventEmitter<number> = new EventEmitter();
  constructor() { 

    console.log('leyenda',this.leyenda);
    // console.log('progreso', this.progreso);
  }

  ngOnInit() {
    console.log('progreso', this.progreso);
  }

  onChanges( newValue:number ){
    
    let elemHTML:any = document.getElementsByName('progreso');
    if(newValue >= 100){
      this.progreso = 100;
    }else if(newValue <= 100){
      this.progreso = 0;
    }else{
      this.progreso = newValue;
    }
    elemHTML.value = Number (this.progreso);
    this.cambioValor.emit( this.progreso );

  }

  cambiarValor( valor:number ){

    if(this.progreso >=100 && valor > 0){
      this.progreso = 100;
      return; 
    }

    if(this.progreso <= 0 && valor < 0){
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;

    this.cambioValor.emit( this.progreso );
  }

}
