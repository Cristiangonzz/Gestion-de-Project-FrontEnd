
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterMemberComponent } from './register/register-member.component';
import { ListAllMemberComponent } from './list/list-all-member.component';
import { DeleteMemberComponent } from './delete/delete-member.component';
import { GetOneMemberComponent } from './getOneBy/get-one-member.component';
import { UpdateMemberComponent } from './update/update-member.component';

const routes: Routes = [
  {
    path:'',
    children: [

      {path:`register`,component: RegisterMemberComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`listAll`,component: ListAllMemberComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`delete/:id`,component: DeleteMemberComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`listOne/:id`,component: GetOneMemberComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`update/:id`,component: UpdateMemberComponent/*,canActivate: [ PermisoGuard ]*/},
      {path:`**`,redirectTo:'register'},
      
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingMemberModule { }
