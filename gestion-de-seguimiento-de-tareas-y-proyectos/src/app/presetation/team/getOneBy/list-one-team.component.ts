import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { DeleteTeamUseCase } from 'src/app/application/usecases/team/delete-team.usecase';
import { GetTeamUseCase } from 'src/app/application/usecases/team/get-team.usecase';
import { ITeamDomainModel } from 'src/app/domain/interfaces/team/team.interface.domain';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-one-team',
  providers: [GetTeamUseCase, DeleteTeamUseCase],
  templateUrl: './list-one-team.component.html',
  styleUrls: ['./list-one-team.component.css']
})
export class ListOneTeamComponent implements OnInit {

  teamId: string = ""; 
  protected team!: ITeamDomainModel; //lo que me traiga la api desde mi servicio se lo tengo que igual a mi varaible team
  
  constructor(
    private readonly getOneUseCase : GetTeamUseCase ,
    private readonly deleteUseCase : DeleteTeamUseCase ,
    private readonly route : ActivatedRoute,
    private router : Router){}

  ngOnInit(): void {
    this.paramsteamId(); //igualo mi variable teamId con el parametro que me llega
    this.getOneteam(this.teamId);//le paso el teamId como parametro y me retorna el team con ese id  
  }


// Capturo el parametro que se pasa por la rota
  paramsteamId():void{ 
    this.route.params.subscribe(
      (params : Params) => {
        this.teamId = params['id']
      });
  }


//Ahora este id es el que tengo enviar al servicio para traer el team 
  getOneteam(id : string):void{
    this.getOneUseCase.execute(id).subscribe(
      (data: ITeamDomainModel) => {this.team = data},
    )
  }

  
  //Redirecciono a este componente si apreta click en editar
  update(){
    this.router.navigate([`team/update/${this.teamId}`]);
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

          this.deleteUseCase.execute(this.teamId).subscribe(
            (response) => {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              this.router.navigate([`team/register`]);
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
