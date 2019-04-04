import { NgModule } from '@angular/core';
import { ButtonModule, InputTextModule, MenubarModule, TooltipModule } from 'primeng/primeng';

@NgModule({
  imports: [
    MenubarModule,
    ButtonModule,
    InputTextModule,
    TooltipModule
  ],
  exports: [
    MenubarModule,
    ButtonModule,
    InputTextModule,
    TooltipModule
  ]
})
export class PrimeNgModule { }
