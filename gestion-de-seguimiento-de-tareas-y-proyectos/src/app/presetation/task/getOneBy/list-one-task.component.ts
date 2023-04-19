import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { useCaseProviders } from 'src/app/data/factory';
import { ITaskDomainModel } from 'src/app/domain/interfaces/task/task.entity.domain';
import { TaskService } from 'src/app/domain/services/task/task.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-one-task',
  templateUrl: './list-one-task.component.html',
  styleUrls: ['./list-one-task.component.css']
})
export class ListOneTaskComponent implements OnInit {
  factory = useCaseProviders;

  taskId: string = ""; 
  public task!: ITaskDomainModel; //lo que me traiga la api desde mi servicio se lo tengo que igual a mi varaible task
  
  constructor(
    private readonly taskService : TaskService ,
    private readonly route : ActivatedRoute,
    private router : Router){}
    
    getOnetask(id : string):void{
      this.factory.getTaskUseCaseProvider.useFactory(this.taskService).execute(id).subscribe(
        (data: ITaskDomainModel) => {this.task = data},
      )
    }

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

          this
            .factory
              .deleteTaskUseCaseProvider
                .useFactory(this.taskService)
                  .execute(this.taskId)
                    .subscribe(
                      (response) => {
                        Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                        )
                        this.router.navigate([`home/home`]);
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
