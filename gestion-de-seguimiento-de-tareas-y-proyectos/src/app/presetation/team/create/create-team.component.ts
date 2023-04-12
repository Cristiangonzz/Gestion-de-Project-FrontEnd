import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterTeamUseCase } from 'src/app/application/usecases/team/register-team.usecase';
import { useCaseProviders } from 'src/app/data/factory';
import { ITeamDomainModel } from 'src/app/domain/interfaces/team/team.interface.domain';
import { TeamService } from 'src/app/domain/services/team/team.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.css']
})
export class CreateTeamComponent implements OnInit {

  factory = useCaseProviders;

  FormCreate= new FormGroup ({
    name: new FormControl('',[Validators.required]),
    project: new FormControl('',[Validators.required]),
  }); 
  
  team : ITeamDomainModel = 
  {  
    name: "",
    member: [""],
    task: [""],
    project: "",
    collaboration: [""],
  }

    
  constructor(
    private teamService: TeamService,
    private router : Router,
    ){}

  ngOnInit(): void {
   
  }

   send():void{
    this.team.name = this.FormCreate.get('name')?.value;
    this.team.project = this.FormCreate.get('project')?.value;
    this
      .factory
        .registerTeamUseCaseProvider
          .useFactory(this.teamService)
            .execute(this.team)
              .subscribe(
                (response) => {
                  console.log(response);
                  this.succes();
                // this.router.navigate([`sign-in`]);
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
