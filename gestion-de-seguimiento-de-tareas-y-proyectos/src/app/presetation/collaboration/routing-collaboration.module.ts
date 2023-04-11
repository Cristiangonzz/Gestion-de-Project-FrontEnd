import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCollaborationComponent } from './create/create-collaboration.component';
import { ListAllCollaborationComponent } from './list/list-collaboration.component';
import { GetOneCollaborationComponent } from './getOneBy/get-one-collaboration.component';
import { UpdateCollaborationComponent } from './update/update-collaboration.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:`create`,component: CreateCollaborationComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`listAll`,component: ListAllCollaborationComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`listOne/:id`,component: GetOneCollaborationComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`update/:id`,component: UpdateCollaborationComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`**`,redirectTo:'listOne/:id'},
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingCollaborationModule { }
