import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuarGuard implements CanActivate {

  constructor( public _us: UsuarioService, public router:Router ){

  }
  canActivate() {

    if(this._us.estaLogueado()){
      console.log('PASO EL GUARD');
      return true;
    }else{
      console.log('Bloqueado por eñ guard');
      this.router.navigate(['/login']);
      return false;
    }

    console.log('Paso por el guard');
    return true;
  }
  
}
