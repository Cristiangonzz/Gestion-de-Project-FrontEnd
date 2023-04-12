import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingProjectModule } from './routing-project.module';
import { CreateProjectComponent } from './create/create-project.component';
import { DeleteProjectComponent } from './delete/delete-project.component';
import { GetOneProjectComponent } from './getOneBy/get-one-project.component';
import { ListAllProjectComponent } from './list/list-all-project.component';
import { UpdateProjectComponent } from './update/update-project.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DataModule } from 'src/app/data/data.module';



@NgModule({
  declarations: [

    CreateProjectComponent,
    DeleteProjectComponent,
    GetOneProjectComponent,
    ListAllProjectComponent,
    UpdateProjectComponent,
    
  ],
  imports: [
    DataModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
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
