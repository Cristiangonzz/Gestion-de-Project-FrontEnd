import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingMemberModule } from './routing-member.module';
import { RegisterMemberComponent } from './register/register-member.component';



@NgModule({
  declarations: [
    RegisterMemberComponent,

  ],
  imports: [
    CommonModule,
    RoutingMemberModule,
  ],
  exports: [
    RegisterMemberComponent,
  ]
})
export class MemberModule { }
