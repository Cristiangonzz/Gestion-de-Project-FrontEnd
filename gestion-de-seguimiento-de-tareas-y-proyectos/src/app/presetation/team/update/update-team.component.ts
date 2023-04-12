import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { useCaseProviders } from 'src/app/data/factory';
import { ITeamDomainModel } from 'src/app/domain/interfaces/team/team.interface.domain';
import { IUpdateTeamModel } from 'src/app/domain/interfaces/team/update-team.interface.domain';
import { TeamService } from 'src/app/domain/services/team/team.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-team',
  templateUrl: './update-team.component.html',
  styleUrls: ['./update-team.component.css']
})
export class UpdateTeamComponent implements OnInit {

  factory = useCaseProviders;
  
  FormUpdate= new FormGroup ({
    name: new FormControl('',[Validators.required]),
    project:new FormControl('',[Validators.required]),
  }); 
  
    team : IUpdateTeamModel = {} as IUpdateTeamModel ;
   

  constructor(
    private readonly teamService: TeamService,
    private readonly route : ActivatedRoute,
    private readonly router : Router,
    ){}

  ngOnInit():void {
  this.paramsTeamkId();
  
  }



  paramsTeamkId():void{ 
    this.route.params.subscribe(
      (params : Params) => {
        this.team._id = params['id']
      });
  }

  send():void{
    this.team.name = this.FormUpdate.get('name')?.value as string;
    this.team.proyect = this.FormUpdate.get('project')?.value as string;


    this
      .factory
        .updateTeamUseCaseProvider
          .useFactory(this.teamService)
            .execute(this.team)
              .subscribe(
                (response:ITeamDomainModel) => {
                  this.succes();
                  this.router.navigate([`team/listOne/${this.team._id}`]);
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
