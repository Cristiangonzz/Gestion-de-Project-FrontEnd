import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { useCaseProviders } from 'src/app/data/factory';
import { ITaskDomainModel } from 'src/app/domain/interfaces/task/task.entity.domain';
import { IUpdateTaskModel } from 'src/app/domain/interfaces/task/update-task.interface.domain';
import { TaskService } from 'src/app/domain/services/task/task.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {

  factory = useCaseProviders;
  
  FormUpdate= new FormGroup ({
    name: new FormControl('',[Validators.required]),
    dataExpiration: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    progress:new FormControl('',[Validators.required]),
    priority:new FormControl('',[Validators.required]),
  }); 
  
    task : IUpdateTaskModel = {} as IUpdateTaskModel ;
   

  constructor(
    private readonly taskService: TaskService,
    private readonly route : ActivatedRoute,
    private router : Router,
    ){}

  ngOnInit():void {
  this.paramsTaskId();
  
  }



  paramsTaskId():void{ 
    this.route.params.subscribe(
      (params : Params) => {
        this.task._id = params['id']
      });
  }

  send():void{
    this.task.name = this.FormUpdate.get('name')?.value as string;
    this.task.dataExpiration = this.FormUpdate.get('dataExpiration')?.value as string;
    this.task.description = this.FormUpdate.get('description')?.value as string;
    this.task.priority = this.FormUpdate.get('priority')?.value as string;
    this.task.progress = this.FormUpdate.get('progress')?.value as string;


    this
      .factory
        .updateTaskUseCaseProvider
          .useFactory(this.taskService)
            .execute(this.task)
              .subscribe(
                (response:ITaskDomainModel) => {
                  this.succes();
                  this.router.navigate([`task/listOne/${this.task._id}`]);
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
      title: 'Your update has been saved',
      showConfirmButton: false,
      timer: 2500
    })
  }

  error(){
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'Not update',
      showConfirmButton: false,
      timer: 2500
    })
  }

}
