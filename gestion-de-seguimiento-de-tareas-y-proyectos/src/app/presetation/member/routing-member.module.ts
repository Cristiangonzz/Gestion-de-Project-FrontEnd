
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'member',
    children: [
      // {path:`create`,component: CreateTransferComponent,canActivate: [ PermisoGuard ]},
      // {path:`list`,component: TransferListComponent,canActivate: [ PermisoGuard ]},
      //{path:`**`,redirectTo:'transfer/list'},
       ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingMemberModule { }
