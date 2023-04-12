import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingTaskModule } from './routing-task.module';
import { CreateTaskComponent } from './create/create-task.component';
import { ListOneTaskComponent } from './getOneBy/list-one-task.component';
import { ListAllTaskComponent } from './list/list-all-task.component';
import { UpdateTaskComponent } from './update/update-task.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { DataModule } from 'src/app/data/data.module';



@NgModule({
  declarations: [

    CreateTaskComponent,
    ListOneTaskComponent,
    ListAllTaskComponent,
    UpdateTaskComponent,
  ],
  imports: [
    DataModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingTaskModule,
    SharedModule,
  ],
  exports: [
    CreateTaskComponent,
    ListOneTaskComponent,
    ListAllTaskComponent,
    UpdateTaskComponent,
  ]
})
export class TaskModule { }
