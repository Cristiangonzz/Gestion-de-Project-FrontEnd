import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DeleteProjectUseCase } from 'src/app/application/usecases/proyect/delete-project.usecase';
import { GetProjectUseCase } from 'src/app/application/usecases/proyect/get-project.usecase';
import { useCaseProviders } from 'src/app/data/factory';
import { IProjectDomainModel } from 'src/app/domain/interfaces/proyect/proyect.interface.domain';
import { ProjectService } from 'src/app/domain/services/proyect/proyect.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-one-project',
  providers: [GetProjectUseCase, DeleteProjectUseCase],
  templateUrl: './get-one-project.component.html',
  styleUrls: ['./get-one-project.component.css']
})
export class GetOneProjectComponent implements OnInit {
  factory = useCaseProviders;
  projectId: string = ""; 
  protected project!: IProjectDomainModel; //lo que me traiga la api desde mi servicio se lo tengo que igual a mi varaible project
  
  constructor(
    private readonly getOneUseCase : GetProjectUseCase ,
    private readonly deleteUseCase : DeleteProjectUseCase ,
    private readonly projectService : ProjectService,
    private readonly route : ActivatedRoute,
    private router : Router){}

  ngOnInit(): void {
    this.paramsprojectId(); //igualo mi variable projectId con el parametro que me llega
    this.getOneproject(this.projectId);//le paso el projectId como parametro y me retorna el project con ese id  
  }


// Capturo el parametro que se pasa por la rota
  paramsprojectId():void{ 
    this.route.params.subscribe(
      (params : Params) => {
        this.projectId = params['id']
      });
  }


//Ahora este id es el que tengo enviar al servicio para traer el project 
  getOneproject(id : string):void{
    this.getOneUseCase.execute(id).subscribe(
      (data: IProjectDomainModel) => {this.project = data},
    )
  }

  
  //Redirecciono a este componente si apreta click en editar
  update(){
    this.router.navigate([`project/update/${this.projectId}`]);
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
            .factory
              .deleteProjectUseCaseProvider
                .useFactory(this.projectService)
                  .execute(this.projectId)
                    .subscribe(
                      (response) => {
                        Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                        )
                        this.router.navigate([`project/register`]);
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
