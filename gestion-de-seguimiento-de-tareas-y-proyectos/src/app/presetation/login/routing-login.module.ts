
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingInMemberComponent } from './signIn/sing-in-member.component';
import { RegisterMemberComponent } from './register/register-member.component';
import { BackGuard } from 'src/app/guards/back.guard';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:`sign-in`,component: SingInMemberComponent ,canActivate:[BackGuard]},
      {path:`register`,component: RegisterMemberComponent ,canActivate:[BackGuard]},
      
      {path:`**`,redirectTo:'sign-in'},
      
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingLoginModule { }
