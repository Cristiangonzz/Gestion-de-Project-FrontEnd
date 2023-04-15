import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { useCaseProviders } from 'src/app/data/factory';
import { ICollaborationDomainModel } from 'src/app/domain/interfaces/collaboration/collaboration.interface.domain';
import { CollaborationService } from 'src/app/domain/services/collaboration/collaboration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-one-collaboration',
  templateUrl: './get-one-collaboration.component.html',
  styleUrls: ['./get-one-collaboration.component.css']
})
export class GetOneCollaborationComponent implements OnInit {
  provider = useCaseProviders;
  collaborationId: string = ""; 
  collaboration: ICollaborationDomainModel = {} as ICollaborationDomainModel; //lo que me traiga la api desde mi servicio se lo tengo que igual a mi varaible collaboration
  
  constructor(
    private readonly collaborationService : CollaborationService ,
    private readonly route : ActivatedRoute,
    private router : Router){}

  ngOnInit(): void {
    this.paramscollaborationId(); //igualo mi variable collaborationId con el parametro que me llega
    this.getOnecollaboration(this.collaborationId);//le paso el collaborationId como parametro y me retorna el collaboration con ese id  
  }


// Capturo el parametro que se pasa por la rota
  paramscollaborationId():void{ 
    this.route.params.subscribe(
      (params : Params) => {
        this.collaborationId = params['id']
      });
  }


//Ahora este id es el que tengo enviar al servicio para traer el collaboration 
  getOnecollaboration(id : string):void{
    this
      .provider
        .getCollaborationUseCaseProvider
          .useFactory(this.collaborationService)
            .execute(id)
              .subscribe(
                (data: ICollaborationDomainModel) => {this.collaboration = data},
    )
  }

  
  //Redirecciono a este componente si apreta click en editar
  update(){
    this.router.navigate([`collaboration/update/${this.collaborationId}`]);
  }

  delete():void{ 
    Swal.fire({
      title: 'Are you delete?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
          this
            .provider
              .deleteCollaborationUseCaseProvider
                .useFactory(this.collaborationService)
                  .execute(this.collaborationId)
                    .subscribe(
                      (response) => {
                        Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                        )
                        this.router.navigate([`collaboration/register`]);
                        console.log(response);
                      },
                      (error:Error) => {
                        Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'not Delete',
                        showConfirmButton: false,
                        timer: 2500
                      })
                        console.log(error);
                      }
                    );
      }
    })
    
    
  }

}
