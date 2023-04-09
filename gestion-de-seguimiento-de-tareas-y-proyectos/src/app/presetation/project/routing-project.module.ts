
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './create/create-project.component';
import { ListAllProjectComponent } from './list/list-all-project.component';
import { DeleteProjectComponent } from './delete/delete-project.component';
import { GetOneProjectComponent } from './getOneBy/get-one-project.component';
import { UpdateProjectComponent } from './update/update-project.component';

const routes: Routes = [
  {
    path:'project',
    children: [
      {path:`create`,component: CreateProjectComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`listAll`,component: ListAllProjectComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`delete`,component: DeleteProjectComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`listOne`,component: GetOneProjectComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`update`,component: UpdateProjectComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`**`,redirectTo:'project/listAll'},
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingProjectModule { }
