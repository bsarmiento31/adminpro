import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import {  HttpClientModule,HttpClient  } from '@angular/common/http';
import { URL_SERVICES } from 'src/app/config/config';
import { map } from 'rxjs/operators';
// import swal from 'sweetalert';

import swal from 'sweetalert';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor( public http: HttpClientModule,public _http: HttpClient, public router: Router ) {
    console.log('Servicio de usuario listo');
    this.cargarStorage();
   } 

   estaLogueado(){
     return (this.token.length > 5) ? true : false;
   }

   cargarStorage(){
     if(localStorage.getItem('token')){
       this.token = localStorage.getItem('token');
      //  this.usuario = JSON.parse(localStorage.getItem('Usuario'));
     }else{
       this.token = '';
       this.usuario = null;
     }
   }

   logout(){
     this.usuario = null;
     this.token = '';
     localStorage.removeItem('token');
     localStorage.removeItem('Usuario');
     this.router.navigate(['/login']);
   }

   //Para guardar al storage  
   guardarStorage( id:string,token:string,usuario: Usuario ){
    localStorage.setItem('id',id);
    localStorage.setItem('token',token);
    localStorage.setItem('Usuario', JSON.stringify(Usuario));
  
    this.usuario = usuario;
    this.token = token;

   }

   crearUsuario(usuario: Usuario){
    
      let url = URL_SERVICES + '/usuario';

      return this._http.post(url,usuario)
      .pipe(
        map((resp:any)=>{
          swal('Usuario Creado',usuario.email, 'success');
              return resp.usuario;
        })
      );


   } 

   loginGoogle(token:string){
    let url = URL_SERVICES + '/login/google';

    return this._http.post(url, { token })
          .pipe(
            map((resp:any)=>{
              this.guardarStorage( resp.id,resp.token,resp.Usuario );
              return true;
            })
          )
   }

   login(usuario: Usuario,recordar:boolean = false){

    if(recordar){
      localStorage.setItem('email',usuario.email);
    }else{
      localStorage.removeItem('email');
    }
      let url = URL_SERVICES + '/login';
      return this._http.post(url,usuario)
      .pipe(
        map((resp:any)=>{
          // localStorage.setItem('id',resp.id);
          // localStorage.setItem('token',resp.token);
          // localStorage.setItem('usuario', JSON.stringify(resp.Usuario));
          this.guardarStorage( resp.id,resp.token,resp.Usuario )
          return true;
        })
      );
      
   }
}
