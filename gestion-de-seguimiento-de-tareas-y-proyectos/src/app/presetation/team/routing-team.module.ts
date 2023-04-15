
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTeamComponent } from './create/create-team.component';

import { ListOneTeamComponent } from './getOneBy/list-one-team.component';
import { UpdateTeamComponent } from './update/update-team.component';
import { PermissionGuard } from 'src/app/guards/permission.guard';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:`create`,component: CreateTeamComponent,canActivate: [ PermissionGuard ]},
      {path:`listOne/:id`,component: ListOneTeamComponent,canActivate: [ PermissionGuard ]},
      {path:`update/:id`,component: UpdateTeamComponent,canActivate: [ PermissionGuard ]},
      {path:`**`,redirectTo:'create'},
       ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingTeamModule { }
