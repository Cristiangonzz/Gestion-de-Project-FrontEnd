import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterProjectUseCase } from 'src/app/application/usecases/proyect/register-project.usecase';
import { IProjectDomainModel } from 'src/app/domain/interfaces/proyect/proyect.interface.domain';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-project',
  providers : [RegisterProjectUseCase],
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {


  FormCreate= new FormGroup ({
    name: new FormControl('',[Validators.required]),
    dataExpiration: new FormControl('',[Validators.required]),
    progress:new FormControl( '',[Validators.required]),
    priority:new FormControl('',[Validators.required]),
  }); 
  
    project : IProjectDomainModel = 
    {  
      name: "",
      dataExpiration: "",
      progress: "",
      priority:"",
    }
    
  constructor(
    private readonly registerUseCase: RegisterProjectUseCase,
    private router : Router,
    ){}

  ngOnInit(): void {
   
  }

  

   send():void{
    this.project = this.FormCreate.getRawValue();
    this.registerUseCase.execute(this.project).subscribe(
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
