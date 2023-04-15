import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { useCaseProviders } from 'src/app/data/factory';
import { IMemberDomainModel } from 'src/app/domain/interfaces/member/member.interface.domain';
import { MemberService } from 'src/app/domain/services/member/member.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-get-one-member',
  templateUrl: './get-one-member.component.html',
  styleUrls: ['./get-one-member.component.css']
})
export class GetOneMemberComponent implements OnInit {
factory = useCaseProviders;
  memberId: string = ""; 
   member!: IMemberDomainModel; //lo que me traiga la api desde mi servicio se lo tengo que igual a mi varaible member
  
  constructor(
    private readonly memberService : MemberService ,
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
    this.factory.getMemberUseCaseProvider.useFactory(this.memberService).execute(id).subscribe(
      (data: IMemberDomainModel) => {this.member = data},
    )
  }

  
  //Redirecciono a este componente si apreta click en editar
  update(){
    this.router.navigate([`member/update/${this.memberId}`]);
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
              .deleteMembernUseCaseProvider
                .useFactory(this.memberService)
                  .execute(this.memberId)
                    .subscribe(
                      (response) => {
                        Swal.fire(
                          'Deleted!',
                          'Your file has been deleted.',
                          'success'
                        )
                        this.router.navigate([`member/register`]);
                        console.log(response);
                      },
                      (error) => {
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
