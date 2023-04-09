import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingMemberModule } from './routing-member.module';
import { RegisterMemberComponent } from './register/register-member.component';
import { DeleteMemberComponent } from './delete/delete-member.component';
import { ListAllMemberComponent } from './list/list-all-member.component';
import { SingInMemberComponent } from './signIn/sing-in-member.component';
import { UpdateMemberComponent } from './update/update-member.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GetOneMemberComponent } from './getOneBy/get-one-member.component';
import { GetMemberUseCase } from 'src/app/application/usecases/member/get-member.usecase';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    
    RegisterMemberComponent,
    DeleteMemberComponent,
    ListAllMemberComponent,
    SingInMemberComponent,
    UpdateMemberComponent,

    GetOneMemberComponent

  ],
  imports: [

    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    RoutingMemberModule,
    SharedModule,

  ],
  exports: [
    
    GetOneMemberComponent,

    RegisterMemberComponent,
    DeleteMemberComponent,
    ListAllMemberComponent,
    SingInMemberComponent,
    UpdateMemberComponent,
  ],
})
export class MemberModule { }
