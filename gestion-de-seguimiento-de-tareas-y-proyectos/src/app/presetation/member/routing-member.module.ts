
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetOneMemberComponent } from './getOneBy/get-one-member.component';
import { UpdateMemberComponent } from './update/update-member.component';
import { PermissionGuard } from 'src/app/guards/permission.guard';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:`listOne/:id`,component: GetOneMemberComponent,canActivate: [ PermissionGuard ]},
      {path:`update/:id`,component: UpdateMemberComponent,canActivate: [ PermissionGuard ]},
      {path:`**`,redirectTo:'listOne/:id'},
      
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingMemberModule { }
