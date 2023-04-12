import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { useCaseProviders } from 'src/app/data/factory';
import { IProjectDomainModel } from 'src/app/domain/interfaces/proyect/proyect.interface.domain';
import { ProjectService } from 'src/app/domain/services/proyect/proyect.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  factory = useCaseProviders;

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
    private readonly projectService: ProjectService,
    private router : Router,
    ){}

  ngOnInit(): void {
   
  }

  

   send():void{
    this.project = this.FormCreate.getRawValue();
    this
      .factory
        .registerProjectUseCaseProvider
          .useFactory(this.projectService)  
            .execute(this.project)
              .subscribe(
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
