import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingTaskModule } from './routing-task.module';
import { CreateTaskComponent } from './create/create-task.component';
import { DeleteTaskComponent } from './delete/delete-task.component';
import { ListOneTaskComponent } from './getOneBy/list-one-task.component';
import { ListAllTaskComponent } from './list/list-all-task.component';
import { UpdateTaskComponent } from './update/update-task.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [

    CreateTaskComponent,
    DeleteTaskComponent,
    ListOneTaskComponent,
    ListAllTaskComponent,
    UpdateTaskComponent,
  ],
  imports: [
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
    DeleteTaskComponent,
    ListOneTaskComponent,
    ListAllTaskComponent,
    UpdateTaskComponent,
  ]
})
export class TaskModule { }
