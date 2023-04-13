import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {  SignInModel } from '../../../domain/interfaces/member/singin.member.domain.interfaces';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { useCaseProviders } from 'src/app/data/factory';
import { MemberService } from 'src/app/domain/services/member/member.service';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

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
 

  constructor(
    private memberService: MemberService,
    private readonly router : Router,
    private readonly auth: Auth,
    ) {}
  signIn(){
    this.member = this.formLogin.getRawValue() as SignInModel ;

    signInWithEmailAndPassword(this.auth,this.member.email,this.member.password);
    
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
