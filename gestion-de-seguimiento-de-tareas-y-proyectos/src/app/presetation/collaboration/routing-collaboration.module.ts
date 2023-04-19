import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCollaborationComponent } from './create/create-collaboration.component';
import { GetOneCollaborationComponent } from './getOneBy/get-one-collaboration.component';
import { UpdateCollaborationComponent } from './update/update-collaboration.component';
import { PermissionGuard } from 'src/app/guards/permission.guard';
import { FindAllCollaborationComponent } from './findall/findall.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:`create`,component: CreateCollaborationComponent,canActivate: [ PermissionGuard ]},
      {path:`listOne/:id`,component: GetOneCollaborationComponent,canActivate: [ PermissionGuard ]},
      {path:`update/:id`,component: UpdateCollaborationComponent,canActivate: [ PermissionGuard ]},
      {path:`listAll`,component: FindAllCollaborationComponent,canActivate: [ PermissionGuard ]},
      {path:`**`,redirectTo:'listAll'},
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingCollaborationModule { }
