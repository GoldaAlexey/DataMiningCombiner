import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './@core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: './@access/access.module#AccessModule'
  },
  {
    path: '',
    loadChildren: './@project/project.module#ProjectModule',
    canLoad: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
