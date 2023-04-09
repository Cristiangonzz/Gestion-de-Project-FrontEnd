
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './create/create-task.component';
import { ListAllTaskComponent } from './list/list-all-task.component';
import { DeleteTaskComponent } from './delete/delete-task.component';
import { ListOneTaskComponent } from './getOneBy/list-one-task.component';
import { UpdateTaskComponent } from './update/update-task.component';

const routes: Routes = [
  {
    path:'task',
    children: [
      {path:`create`,component: CreateTaskComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`listAll`,component: ListAllTaskComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`delete`,component: DeleteTaskComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`listOne`,component: ListOneTaskComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`Update`,component: UpdateTaskComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`**`,redirectTo:'task/listAll'},
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingTaskModule { }
