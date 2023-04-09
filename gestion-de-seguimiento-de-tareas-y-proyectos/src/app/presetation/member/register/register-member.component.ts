import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterMemberUseCase } from 'src/app/application/usecases/member/register-member.usecase';
import { IRegisterMemberDomainModel } from 'src/app/domain/interfaces/member/register-member.interface.domain';

@Component({
  selector: 'app-register-member',
  providers: [RegisterMemberUseCase],
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css']
})
export class RegisterMemberComponent implements OnInit {


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

  constructor(
    private readonly registerUseCase: RegisterMemberUseCase,
    private formBuilder : FormBuilder,
    private router : Router,
    ){}

  ngOnInit(): void {
   
  }

  

   send():void{
    this.member = this.FormRegister.getRawValue();
    this.registerUseCase.execute(this.member).subscribe(
      (response) => {
        console.log(response);
      })
   }

}
