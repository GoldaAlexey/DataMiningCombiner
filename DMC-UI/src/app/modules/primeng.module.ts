import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  imports: [
    MenubarModule,
    ButtonModule,
    InputTextModule
  ],
  exports: [
    MenubarModule,
    ButtonModule,
    InputTextModule
  ]
})
export class PrimeNgModule { }
