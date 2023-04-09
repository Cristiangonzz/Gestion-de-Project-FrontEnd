import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingProjectModule } from './routing-project.module';
import { CreateProjectComponent } from './create/create-project.component';
import { DeleteProjectComponent } from './delete/delete-project.component';
import { GetOneProjectComponent } from './getOneBy/get-one-project.component';
import { ListAllProjectComponent } from './list/list-all-project.component';
import { UpdateProjectComponent } from './update/update-project.component';



@NgModule({
  declarations: [

    CreateProjectComponent,
    DeleteProjectComponent,
    GetOneProjectComponent,
    ListAllProjectComponent,
    UpdateProjectComponent,
    
  ],
  imports: [
    CommonModule,
    RoutingProjectModule,
  ],
  exports: [

    CreateProjectComponent,
    DeleteProjectComponent,
    GetOneProjectComponent,
    ListAllProjectComponent,
    UpdateProjectComponent,

  ]
})
export class ProjectModule { }
