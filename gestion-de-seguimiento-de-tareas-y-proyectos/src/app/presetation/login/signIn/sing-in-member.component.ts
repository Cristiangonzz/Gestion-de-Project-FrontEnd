import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SingInMemberUseCase } from 'src/app/application/usecases/member/sing-in-member.usecase';
import {  SignInModel } from '../../../domain/interfaces/member/singin.member.domain.interfaces';
import { SignInFireBaseUseCase } from 'src/app/application/usecases/login-fire-base/sign-in-fire-base.use-case';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sing-in-member',
  providers: [SingInMemberUseCase,SignInFireBaseUseCase],
  templateUrl: './sing-in-member.component.html',
  styleUrls: ['./sing-in-member.component.css']
})
export class SingInMemberComponent {

  formLogin= new FormGroup ({
    email:new FormControl<string>('',[Validators.required,Validators.email]),
    password:new FormControl<string>('',[Validators.required,Validators.minLength(8)]),
  }); 

  member : SignInModel = {} as SignInModel;
 

  constructor(
    private readonly signInUseCase: SingInMemberUseCase,
    private readonly signInFireBaseUseCase: SignInFireBaseUseCase,
    private readonly router : Router,
    ) {}

  signIn(){
    this.member = this.formLogin.getRawValue() as SignInModel ;
    this.signInFireBaseUseCase.execute(this.member);
    
    this.signInUseCase.execute(this.member).subscribe({
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

  google(){}
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
