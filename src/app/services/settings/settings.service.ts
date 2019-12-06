import { Injectable } from '@angular/core';
import { Inject } from '@angular/core';

import { DOCUMENT } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class SettingsService { 

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema:'default'
  };

  constructor(  @Inject(DOCUMENT) private _document, ) { 
    this.cargarAjustes();
  }

  guardarAjustes(){
    console.log('guardado en el local storage');
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ));
  }

  //esta funcion se tiene que inyectar en el app.component.ts
  cargarAjustes(){
    if(localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      console.log('Cargando del local storage');
      this.aplicarTema( this.ajustes.tema );
    }else{
      console.log('Usando valores por defecto');
      this.aplicarTema( this.ajustes.tema )
    }
  }

  aplicarTema( tema:string ){
    let url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('tema').setAttribute('href',url);
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }
}



interface Ajustes{
  temaUrl:string;
  tema:string;
}
