import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { useCaseProviders } from 'src/app/data/factory';
import { IProjectDomainModel } from 'src/app/domain/interfaces/proyect/proyect.interface.domain';
import { IUpdateProjectModel } from 'src/app/domain/interfaces/proyect/update-proyect.interface.domain';
import { ProjectService } from 'src/app/domain/services/proyect/proyect.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent  implements OnInit {

  factory = useCaseProviders;
  
  FormUpdate= new FormGroup ({
    name: new FormControl('',[Validators.required]),
    dataExpiration: new FormControl('',[Validators.required]),
    progress:new FormControl('',[Validators.required]),
    priority:new FormControl( '',[Validators.required]),
  }); 
  
    project : IUpdateProjectModel = {} as IUpdateProjectModel ;
   

  constructor(
    private readonly projectService: ProjectService,
    private readonly route : ActivatedRoute,
    private router : Router,
    ){}

  ngOnInit():void {
  this.paramsProjectId();
  
  }



  paramsProjectId():void{ 
    this.route.params.subscribe(
      (params : Params) => {
        this.project._id = params['id']
      });
  }

  send():void{
    this.project.name = this.FormUpdate.get('name')?.value as string;
    this.project.dataExpiration = this.FormUpdate.get('dataExpiration')?.value as string;
    this.project.priority = this.FormUpdate.get('priority')?.value as string;
    this.project.progress = this.FormUpdate.get('progress')?.value as string;


    this
      .factory
        .updateProjectUseCaseProvider
          .useFactory(this.projectService)
            .execute(this.project)
              .subscribe(
                (response:IProjectDomainModel) => {
                  this.succes();
                  this.router.navigate([`project/listOne/${this.project._id}`]);
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