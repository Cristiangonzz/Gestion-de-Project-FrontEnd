import { Component, OnInit } from '@angular/core';
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterMemberUseCase } from 'src/app/application/usecases/member/register-member.usecase';
import { useCaseProviders } from 'src/app/data/factory';
import { IRegisterMemberDomainModel } from 'src/app/domain/interfaces/member/register-member.interface.domain';
import { SignInModel } from 'src/app/domain/interfaces/member/singin.member.domain.interfaces';
import { MemberService } from 'src/app/domain/services/member/member.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css']
})
export class RegisterMemberComponent implements OnInit {

  factory = useCaseProviders;

  FormRegister= new FormGroup ({
    name: new FormControl('',[Validators.required]),
    document: new FormControl('',[Validators.required]),
    salary:new FormControl<number>( 0,[Validators.required]),
    role:new FormControl( '',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
  }); 
  
    member : IRegisterMemberDomainModel = 
    {  
      name: "",
      document: "",
      salary: 0,
      role: "",
      email:"",
      password:"",
    }
    memberfireBase : SignInModel = {} as SignInModel; 
  constructor(
   // private readonly registerUseCase: registerMemberUseCaseProvider,
    private readonly memberService: MemberService,
    private auth : Auth,
    private router : Router,
    ){}

  ngOnInit(): void {
   
  }

  send():void{
    
    this.member = this.FormRegister.getRawValue() as IRegisterMemberDomainModel;
    this
      .factory
        .registerMemberUseCaseProvider
          .useFactory(this.memberService)
            .execute(this.member)
              .subscribe(
                (response) => {
                  console.log(response);
                  createUserWithEmailAndPassword(this.auth,this.member.email,this.member.password);
                  this.succes();
                  this.router.navigate([`login/sign-in`]);
                },
                (error) => {
                  console.log(error);
                  this.error();
                });
      
   }

   succes(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your register has been saved',
      showConfirmButton: false,
      timer: 2500
    })
   }

   error(){
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Not Register',
      showConfirmButton: false,
      timer: 2500
    })
   }

}
