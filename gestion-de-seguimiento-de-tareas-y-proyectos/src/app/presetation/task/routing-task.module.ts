
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create/create-task.component';
import { ListAllTaskComponent } from './list/list-all-task.component';
import { ListOneTaskComponent } from './getOneBy/list-one-task.component';
import { UpdateTaskComponent } from './update/update-task.component';
import { PermissionGuard } from 'src/app/guards/permission.guard';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:`create`,component: CreateTaskComponent,canActivate: [ PermissionGuard ]},
      {path:`listAll`,component: ListAllTaskComponent,canActivate: [ PermissionGuard ]},
      {path:`listOne`,component: ListOneTaskComponent,canActivate: [ PermissionGuard ]},
      {path:`Update`,component: UpdateTaskComponent,canActivate: [ PermissionGuard ]},
      {path:`**`,redirectTo:'listAll'},
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingTaskModule { }
