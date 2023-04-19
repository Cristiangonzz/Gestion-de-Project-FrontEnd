import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { HasUserTokenDecodeUseCase } from 'src/app/application/usecases/login-fire-base/get-token-local-storage.use-case';
import { HasUserUseCase } from 'src/app/application/usecases/login-fire-base/has-user.use-case';
import { useCaseProviders } from 'src/app/data/factory';
import { ITokenUser } from 'src/app/domain/interfaces/member/token-user-interfaces';



@Component({
  selector: 'app-toolbar',
  providers: [HasUserUseCase],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent  implements  OnInit{
  factory = useCaseProviders;
  isAdmin?: boolean ;

  tokenUser : ITokenUser = {} as ITokenUser ;

  constructor(
    private router : Router,
    ){}
      

  ngOnInit(): void {
    this
      .factory
        .hasUserUseCaseProvider
          .useFactory()
            .statusEmmit
              .subscribe((status: boolean) => {
               this.isAdmin = status;
              }
    );
  }

  btnPrincipal(){
    if(this.factory.hasUserUseCaseProvider.useFactory().execute()){
      this.router.navigate(['login']);
    }
    this.router.navigate(['home/home'])
  }
  btnTask(){
    this.router.navigate(['task/create'])
  }
  btnTeam(){
    this.router.navigate(['team/create'])
  }
  btnCollaboration(){
    this.router.navigate(['collaboration/create'])
  }
  btnFindAllCollaboration(){
    this.router.navigate(['collaboration/listAll']);
  }
  btnProject(){
    this.router.navigate(['project/create'])
  }
  btnLogin(){
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }

  btnUpdate(){

    this.factory.DecodeUseCaseProviders.useFactory().execute().subscribe((token: ITokenUser) => {
      this.router.navigate([`member/update/${token.member._id}`])
    });

  }
 
   


}
