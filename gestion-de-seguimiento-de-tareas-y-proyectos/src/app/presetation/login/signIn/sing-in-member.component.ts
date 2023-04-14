import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  SignInModel } from '../../../domain/interfaces/member/singin.member.domain.interfaces';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { useCaseProviders } from 'src/app/data/factory';
import { MemberService } from 'src/app/domain/services/member/member.service';
import { Auth, UserCredential, signInWithEmailAndPassword } from '@angular/fire/auth';
import { IRegisterMemberDomainModel } from 'src/app/domain/interfaces/member/register-member.interface.domain';

@Component({
  selector: 'app-sing-in-member',
  templateUrl: './sing-in-member.component.html',
  styleUrls: ['./sing-in-member.component.css']
})
export class SingInMemberComponent {
  factory = useCaseProviders;
  
  formLogin= new FormGroup ({
    email:new FormControl<string>('',[Validators.required,Validators.email]),
    password:new FormControl<string>('',[Validators.required,Validators.minLength(8)]),
  }); 

  member : SignInModel = {} as SignInModel;
  newMemberRegister : IRegisterMemberDomainModel = {
    name: "" ,
    document: "" ,
    salary: 0 ,
    role: "" ,

    email:"" ,
    password:"" ,
  } ;

  constructor(
    private memberService: MemberService,
    private readonly router : Router,
    private readonly auth: Auth,
    ) {}
  signIn(){
    this.member = this.formLogin.getRawValue() as SignInModel ;
    this.factory.signInFireBaseUseCasepProvaider.useFactory(this.auth).execute(this.member);

    this.factory
      .signInMemberUseCaseProvider
        .useFactory(this.memberService)
          .execute(this.member)
            .subscribe({
              next: (response: string) => {
                localStorage.setItem('token', response);
                this.succes();
                this.router.navigate([`home`]);
      },
      error: (err: Error) => {
        this.error();
        throw new Error ("this is an error Sign In",err);
      }
    });
  }

  google(){
    this.factory.signInGoogleUseCasepProvaider.useFactory(this.auth).execute().subscribe(
      (data: UserCredential) => {
       this.member.email = data.user.email as string;
        this.factory.getEmailMemberUseCaseProvider.useFactory(this.memberService).execute(this.member.email).subscribe(
          (data: IRegisterMemberDomainModel) => {
            this.member.email = data.email;
            this.member.password = data.password;
            this.factory.signInFireBaseUseCasepProvaider.useFactory(this.auth).execute(this.member);
            this.factory
            .signInMemberUseCaseProvider
              .useFactory(this.memberService)
                .execute(this.member)
                  .subscribe({
                    next: (response: string) => {
                      localStorage.setItem('token', response);
                      this.succes();
                      this.router.navigate([`home`]);
                    },
                    error: (err: Error) => {
                      
                      this.error();
                      throw new Error ("Not Found Register",err);
                    }
          });
            this.succes();
            this.router.navigate([`home`]);
          },
          (err: Error) => {
            this.error();
            throw new Error ("Not Found Register",err);
          }
        )
      },
      (err: Error) => {
        this.error();
        throw new Error ("Not Found Register",err);
      });
    
}

 

  getMember():boolean{
    if(this.factory.getEmailMemberUseCaseProvider.useFactory(this.memberService).execute(this.member.email)){
      return true;
    }
    return false;
  }

  register(){
    this.router.navigate([`login/register`]);
  }

  succes(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'welcome to project manager ',
      showConfirmButton: false,
      timer: 2500
    })
   }

   error(){
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Not Sign In',
      showConfirmButton: false,
      timer: 2500
    })
   }



}

