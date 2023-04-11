
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingInMemberComponent } from './signIn/sing-in-member.component';
import { RegisterMemberComponent } from './register/register-member.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path:`sign-in`,component: SingInMemberComponent},
      {path:`register`,component: RegisterMemberComponent},
      
      {path:`**`,redirectTo:'sign-in'},
      
      ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingLoginModule { }
