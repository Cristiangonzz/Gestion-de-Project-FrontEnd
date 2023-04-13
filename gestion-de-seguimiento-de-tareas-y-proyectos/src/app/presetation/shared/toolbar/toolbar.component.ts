import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { HasUserUseCase } from 'src/app/application/usecases/login-fire-base/has-user.use-case';
import { useCaseProviders } from 'src/app/data/factory';



@Component({
  selector: 'app-toolbar',
  providers: [HasUserUseCase],
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent  implements  OnInit{
  factory = useCaseProviders;
  isAdmin?: boolean ;

  constructor(
    private router : Router,
    private readonly hasUserUseCase: HasUserUseCase,
    ){}
      

  ngOnInit(): void {
    this
      .hasUserUseCase
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
  btnProject(){
    this.router.navigate(['project/create'])
  }
  btnLogin(){
    localStorage.removeItem('token');
    this.router.navigate(['login'])
  }
 
   


}
