import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProjectRoutingModule } from './project.routing';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
