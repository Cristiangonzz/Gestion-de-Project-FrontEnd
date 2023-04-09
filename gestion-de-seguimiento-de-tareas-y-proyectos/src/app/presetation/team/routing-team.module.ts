
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTeamComponent } from './create/create-team.component';
import { ListAllTeamComponent } from './list/list-all-team.component';
import { ListOneTeamComponent } from './getOneBy/list-one-team.component';
import { UpdateTeamComponent } from './update/update-team.component';
import { DeleteTeamComponent } from './delete/delete-team.component';

const routes: Routes = [
  {
    path:'team',
    children: [
      {path:`create`,component: CreateTeamComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`listAll`,component: ListAllTeamComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`listOne`,component: ListOneTeamComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`update`,component: UpdateTeamComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`delete`,component: DeleteTeamComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`**`,redirectTo:'team/listAll'},
       ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingTeamModule { }
