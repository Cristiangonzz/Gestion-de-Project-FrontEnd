import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingLoginModule } from './routing-login.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RegisterMemberComponent } from './register/register-member.component';
import { SingInMemberComponent } from './signIn/sing-in-member.component';
import { DataModule } from 'src/app/data/data.module';



@NgModule({
  declarations: [ 
    SingInMemberComponent,
    RegisterMemberComponent,
  ],
  imports: [

    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    RoutingLoginModule,
    SharedModule,
    
    DataModule,

  ],
  exports: [
    SingInMemberComponent,
    RegisterMemberComponent
  ],
})
export class LoginModule { }
