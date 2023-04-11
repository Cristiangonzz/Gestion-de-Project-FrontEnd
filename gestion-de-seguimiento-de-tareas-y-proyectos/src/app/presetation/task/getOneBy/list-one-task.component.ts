import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DeleteTaskUseCase } from 'src/app/application/usecases/task/delete-task.usecase';
import { GetTaskUseCase } from 'src/app/application/usecases/task/get-task.usecase';
import { ITaskDomainModel } from 'src/app/domain/interfaces/task/task.entity.domain';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-one-task',
  providers: [GetTaskUseCase, DeleteTaskUseCase],
  templateUrl: './list-one-task.component.html',
  styleUrls: ['./list-one-task.component.css']
})
export class ListOneTaskComponent implements OnInit {

  taskId: string = ""; 
  protected task!: ITaskDomainModel; //lo que me traiga la api desde mi servicio se lo tengo que igual a mi varaible task
  
  constructor(
    private readonly getOneUseCase : GetTaskUseCase ,
    private readonly deleteUseCase : DeleteTaskUseCase ,
    private readonly route : ActivatedRoute,
    private router : Router){}

  ngOnInit(): void {
    this.paramstaskId(); //igualo mi variable taskId con el parametro que me llega
    this.getOnetask(this.taskId);//le paso el taskId como parametro y me retorna el task con ese id  
  }


// Capturo el parametro que se pasa por la rota
  paramstaskId():void{ 
    this.route.params.subscribe(
      (params : Params) => {
        this.taskId = params['id']
      });
  }


//Ahora este id es el que tengo enviar al servicio para traer el task 
  getOnetask(id : string):void{
    this.getOneUseCase.execute(id).subscribe(
      (data: ITaskDomainModel) => {this.task = data},
    )
  }

  
  //Redirecciono a este componente si apreta click en editar
  update(){
    this.router.navigate([`task/update/${this.taskId}`]);
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

          this.deleteUseCase.execute(this.taskId).subscribe(
            (response) => {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              this.router.navigate([`task/register`]);
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
