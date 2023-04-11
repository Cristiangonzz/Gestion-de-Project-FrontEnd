import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterCollaborationUseCase } from 'src/app/application/usecases/collaboration/register-collaboration.usecase';
import { ICollaborationDomainModel } from 'src/app/domain/interfaces/collaboration/collaboration.interface.domain';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create',
  providers: [RegisterCollaborationUseCase],
  templateUrl: './create-collaboration.component.html',
  styleUrls: ['./create-collaboration.component.css']
})
export class CreateCollaborationComponent implements OnInit {


  FormCreate= new FormGroup ({
    comment: new FormControl('',[Validators.required]),
    notification: new FormControl('',[Validators.required]),
    progress:new FormControl( '',[Validators.required]),
    performence:new FormControl('',[Validators.required]),
  }); 
  
    collaboration : ICollaborationDomainModel = 
    {  
      comment: "",
      notification: "",
      progress: "",
      performence:"",
    }
    
  constructor(
    private readonly registerUseCase: RegisterCollaborationUseCase,
    private router : Router,
    ){}

  ngOnInit(): void {
   
  }

  

   send():void{
    this.collaboration = this.FormCreate.getRawValue();
    this.registerUseCase.execute(this.collaboration).subscribe(
      (response) => {
        console.log(response);
        this.succes();
        this.router.navigate([`sign-in`]);
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
