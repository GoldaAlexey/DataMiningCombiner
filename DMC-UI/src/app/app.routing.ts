import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './@core/components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent
  }, {
    path: 'login',
    loadChildren: './@access/access.module#AccessModule',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
