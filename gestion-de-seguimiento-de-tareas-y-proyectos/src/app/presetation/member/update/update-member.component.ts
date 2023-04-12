import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UpdateMemberUseCase } from 'src/app/application/usecases/member/update-member.usecase';
import { useCaseProviders } from 'src/app/data/factory';
import { IUpdateMemberModel } from 'src/app/domain/interfaces/member/update-member.interface.domain';
import { MemberService } from 'src/app/domain/services/member/member.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent  implements OnInit {

  factory = useCaseProviders;
  FormUpdate= new FormGroup ({
    name: new FormControl('',[Validators.required]),
    document: new FormControl('',[Validators.required]),
    salary:new FormControl<number>( 0,[Validators.required]),
    role:new FormControl( '',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
  }); 
  
    member : IUpdateMemberModel = 
    {  
      _id: "",
      name: "",
      document: "",
      salary: 0,
      role: "",
      email:"",
      password:"",
    }

  constructor(
    private readonly memberService: MemberService,
    private readonly route : ActivatedRoute,
    private router : Router,
    ){}

  ngOnInit():void {
  this.paramsMemberId();
  
  }



  paramsMemberId():void{ 
    this.route.params.subscribe(
      (params : Params) => {
        this.member._id = params['id']
      });
  }

  send():void{
  this.member.name = this.FormUpdate.get('name')?.value;
  this.member.document = this.FormUpdate.get('document')?.value;
  this.member.salary = this.FormUpdate.get('salary')?.value;
  this.member.role = this.FormUpdate.get('role')?.value;
  this.member.email = this.FormUpdate.get('email')?.value;
  this.member.password = this.FormUpdate.get('password')?.value;

  this
    .factory
      .updateMemberUseCaseProvider
        .useFactory(this.memberService)
          .execute(this.member)
            .subscribe(
              (response:IUpdateMemberModel) => {
                this.succes();
                console.log(response);
              },
              (error : Error) => {
                this.error();
                console.log(error);
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
