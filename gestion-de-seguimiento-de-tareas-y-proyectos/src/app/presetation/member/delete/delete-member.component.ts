import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DeleteMemberUseCase } from 'src/app/application/usecases/member/delete-member.usecase';

@Component({
  selector: 'app-delete-member',
  templateUrl: './delete-member.component.html',
  styleUrls: ['./delete-member.component.css']
})
export class DeleteMemberComponent  implements OnInit{

  constructor(
    private readonly deleteUseCase : DeleteMemberUseCase ,
    private readonly route : ActivatedRoute,){}
 
  ngOnInit(): void {
    this.paramsMemberId(); //igualo mi variable memberId con el parametro que me llega
  }


// Capturo el parametro que se pasa por la rota
  paramsMemberId():void{ 
    this.route.params.subscribe(
      (params : Params) => {
        this.deleteUseCase.execute( params['id']);
      });
    
  }

}
