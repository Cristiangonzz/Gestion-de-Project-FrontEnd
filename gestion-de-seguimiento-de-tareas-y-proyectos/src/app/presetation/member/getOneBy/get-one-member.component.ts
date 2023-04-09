import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DeleteMemberUseCase } from 'src/app/application/usecases/member/delete-member.usecase';
import { GetMemberUseCase } from 'src/app/application/usecases/member/get-member.usecase';
import { IMemberDomainModel } from 'src/app/domain/interfaces/member/member.interface.domain';

@Component({
  selector: 'app-get-one-member',
  providers: [GetMemberUseCase],
  templateUrl: './get-one-member.component.html',
  styleUrls: ['./get-one-member.component.css']
})
export class GetOneMemberComponent implements OnInit {

  memberId: string = ""; 
  protected member!: IMemberDomainModel; //lo que me traiga la api desde mi servicio se lo tengo que igual a mi varaible member
  
  constructor(
    private readonly getOneUseCase : GetMemberUseCase ,
    private readonly deleteUseCase : DeleteMemberUseCase ,
    private readonly route : ActivatedRoute,
    private router : Router){}

  ngOnInit(): void {
    this.paramsMemberId(); //igualo mi variable memberId con el parametro que me llega
    this.getOneMember(this.memberId);//le paso el memberId como parametro y me retorna el member con ese id  
  }


// Capturo el parametro que se pasa por la rota
  paramsMemberId():void{ 
    this.route.params.subscribe(
      (params : Params) => {
        this.memberId = params['id']
      });
  }


//Ahora este id es el que tengo enviar al servicio para traer el member 
  getOneMember(id : string):void{
    this.getOneUseCase.execute(id).subscribe(
      (data: IMemberDomainModel) => {this.member = data},
    )
  }

  
  //Redirecciono a este componente si apreta click en editar
  update(id : string){
    this.router.navigate([`member/update/${id}`]);
  }
  delete(id : string){
    console.log(id);
    this.deleteUseCase.execute(id);
  }



  

}
