
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCollaborationComponent } from './create/create-collaboration.component';
import { ListAllCollaborationComponent } from './list/list-collaboration.component';
import { DeleteCollaborationComponent } from './delete/delete-collaboration.component';
import { GetOneCollaborationComponent } from './getOneBy/get-one-collaboration.component';
import { UpdateCollaborationComponent } from './update/update-collaboration.component';

const routes: Routes = [
  {
    path:'collaboration',
    children: [
      {path:`create`,component: CreateCollaborationComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`listAll`,component: ListAllCollaborationComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`delete`,component: DeleteCollaborationComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`listOne`,component: GetOneCollaborationComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`update`,component: UpdateCollaborationComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`**`,redirectTo:'collaboration/listAll'},
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingCollaborationModule { }
