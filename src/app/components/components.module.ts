import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { PagesModule } from '../pages/pages.module';
import { RouterLink, RouterLinkActive } from '@angular/router';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
     PagesModule,
     RouterLink,
     RouterLinkActive
  ],
  exports:[
    MenuComponent
  ]

  
})
export class ComponentsModule { }
