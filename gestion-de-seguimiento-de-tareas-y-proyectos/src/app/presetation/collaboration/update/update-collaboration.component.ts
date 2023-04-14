import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UpdateCollaborationUseCase } from 'src/app/application/usecases/collaboration/update-collaboration.usecase';
import { useCaseProviders } from 'src/app/data/factory';
import { ICollaborationDomainModel } from 'src/app/domain/interfaces/collaboration/collaboration.interface.domain';
import { IUpdateCollaborationModel } from 'src/app/domain/interfaces/collaboration/update-collaboration.interface.domain';
import { CollaborationService } from 'src/app/domain/services/collaboration/collaboration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  providers : [UpdateCollaborationUseCase],
  templateUrl: './update-collaboration.component.html',
  styleUrls: ['./update-collaboration.component.css']
})
export class UpdateCollaborationComponent implements OnInit {

  provider = useCaseProviders;
  FormUpdate= new FormGroup ({
    comment: new FormControl('',[Validators.required]),
    notification: new FormControl('',[Validators.required]),
    progress:new FormControl( '',[Validators.required]),
    performence:new FormControl('',[Validators.required]),
  }); 
  
    collaboration : IUpdateCollaborationModel = 
    {  
      _id: "",
      comment: "",
      notification: "",
      progress: "",
      performence:"",
    }
    
  constructor(
    private readonly collaborationService: CollaborationService,
    private readonly route : ActivatedRoute,
    private readonly router : Router,
    ){}

  ngOnInit(): void {
    this.paramsMemberId();
    this.upDateFromApi();
  }

  paramsMemberId():void{ 
    this.route.params.subscribe(
      (params : Params) => {
        this.collaboration._id = params['id']
      });
  }

  upDateFromApi():void{
    this
      .provider
        .getCollaborationUseCaseProvider
          .useFactory(this.collaborationService)
            .execute(this.collaboration._id as string)
              .subscribe((data : ICollaborationDomainModel) => {
                this.FormUpdate.patchValue(data);
              });
  }

   send():void{

    
    this.collaboration.comment = this.FormUpdate.get('comment')?.value as string;
    this.collaboration.notification = this.FormUpdate.get('notification')?.value as string;
    this.collaboration.progress = this.FormUpdate.get('progress')?.value as string;
    this.collaboration.performence = this.FormUpdate.get('performence')?.value as string;

    this
      .provider
        .updateCollaborationUseCaseProvider
          .useFactory(this.collaborationService)
            .execute(this.collaboration)
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
