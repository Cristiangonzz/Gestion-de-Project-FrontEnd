
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { PermissionGuard } from 'src/app/guards/permission.guard';

const routes: Routes = [
  {
    path:'',
    children: [

      {path:`home`,component: HomeComponent,canActivate: [ PermissionGuard ]},
      {path:`**`,redirectTo:'home'},
      
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingHomeModule { }
