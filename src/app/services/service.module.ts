import {  CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


//Modulos

import { SettingsService,SidebarService,SharedService,UsuarioService,LoginGuarGuard } from './service.index';

@NgModule({
  providers:[
    SettingsService,
    SidebarService,
    SharedService,
    UsuarioService,
    LoginGuarGuard
  ],
  
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: []
  

})
export class ServiceModule { }

