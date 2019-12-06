import {  CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

//Modulos

import { SettingsService,SidebarService,SharedService } from './service.index';

@NgModule({
  providers:[
    SettingsService,
    SidebarService,
    SharedService 
  ],
  
  imports: [
    CommonModule
  ],
  declarations: []
  

})
export class ServiceModule { }

