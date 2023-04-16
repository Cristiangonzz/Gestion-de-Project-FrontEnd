import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingMemberModule } from './routing-member.module';
import { UpdateMemberComponent } from './update/update-member.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GetOneMemberComponent } from './getOneBy/get-one-member.component';
import { SharedModule } from '../shared/shared.module';
import { DataModule } from 'src/app/data/data.module';



@NgModule({
  declarations: [
    
  
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
    DataModule,

  ],
  exports: [
    
    GetOneMemberComponent,
    UpdateMemberComponent,
  ],
})
export class MemberModule { }
