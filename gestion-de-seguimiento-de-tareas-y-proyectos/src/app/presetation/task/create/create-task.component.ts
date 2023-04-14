import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { useCaseProviders } from 'src/app/data/factory';
import { ITaskDomainModel } from 'src/app/domain/interfaces/task/task.entity.domain';
import { TaskService } from 'src/app/domain/services/task/task.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  factory = useCaseProviders;

  FormCreate= new FormGroup ({
    name: new FormControl('',[Validators.required]),
    dataExpiration: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    progress:new FormControl( '',[Validators.required]),
    priority:new FormControl('',[Validators.required]),
  }); 
  
    task : ITaskDomainModel = 
    {  
      name: "",
      dataExpiration: "",
      description: "",
      progress: "",
      priority:"",
    }
    
  constructor(
    private readonly taskService: TaskService,
    private router : Router,
    ){}

  ngOnInit(): void {
   
  }

  

   send():void{
    this.task = this.FormCreate.getRawValue() as ITaskDomainModel;
    this
      .factory
        .registerTaskUseCaseProvider
          .useFactory(this.taskService)
            .execute(this.task)
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
