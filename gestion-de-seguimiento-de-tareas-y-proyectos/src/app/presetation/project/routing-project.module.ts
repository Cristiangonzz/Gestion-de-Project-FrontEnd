
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProjectComponent } from './create/create-project.component';
import { GetOneProjectComponent } from './getOneBy/get-one-project.component';
import { UpdateProjectComponent } from './update/update-project.component';
import { PermissionGuard } from 'src/app/guards/permission.guard';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:`create`,component: CreateProjectComponent,canActivate: [ PermissionGuard ]},
      {path:`listOne/:id`,component: GetOneProjectComponent,canActivate: [ PermissionGuard ]},
      {path:`update/:id`,component: UpdateProjectComponent,canActivate: [ PermissionGuard ]},
      {path:`**`,redirectTo:'listOne/:id'},
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingProjectModule { }
