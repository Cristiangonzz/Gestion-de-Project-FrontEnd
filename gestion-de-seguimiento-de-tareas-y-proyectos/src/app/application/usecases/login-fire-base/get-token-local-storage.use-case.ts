import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';
import { ITokenUser } from 'src/app/domain/interfaces/member/token-user-interfaces';
import { UseCase } from 'src/app/domain/use-case';

@Injectable({
    providedIn: 'root'
})
export class HasUserTokenDecodeUseCase implements UseCase<undefined,ITokenUser>{
    private helper = new JwtHelperService();

    execute(): Observable<ITokenUser> {
        const token = localStorage.getItem('token'); 
      if(token){
        return of(this.helper.decodeToken(token) as ITokenUser);
      }
      const t : ITokenUser = {} as ITokenUser;
        return of(t);
    }
}