import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UpdateCollaborationUseCase } from 'src/app/application/usecases/collaboration/update-collaboration.usecase';
import { IUpdateCollaborationModel } from 'src/app/domain/interfaces/collaboration/update-collaboration.interface.domain';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  providers : [UpdateCollaborationUseCase],
  templateUrl: './update-collaboration.component.html',
  styleUrls: ['./update-collaboration.component.css']
})
export class UpdateCollaborationComponent implements OnInit {


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
    private readonly updateUseCase: UpdateCollaborationUseCase,
    private readonly route : ActivatedRoute,
    private readonly router : Router,
    ){}

  ngOnInit(): void {
    this.paramsMemberId();
  
  }

  paramsMemberId():void{ 
    this.route.params.subscribe(
      (params : Params) => {
        this.collaboration._id = params['id']
      });
  }
  

   send():void{
    this.collaboration.comment = this.FormUpdate.get('comment')?.value;
    this.collaboration.notification = this.FormUpdate.get('notification')?.value;
    this.collaboration.progress = this.FormUpdate.get('progress')?.value;
    this.collaboration.performence = this.FormUpdate.get('performence')?.value;

    this.updateUseCase.execute(this.collaboration).subscribe(
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
