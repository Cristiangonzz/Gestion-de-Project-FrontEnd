import { Injectable } from '@angular/core';
import { Observable, from, of } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
})
export class HasUserTokenDecodeUseCase{
    private helper = new JwtHelperService();

    execute():Observable<any>{
        const token = localStorage.getItem('token'); 
      if(token){
        return from(this.helper.decodeToken(token));
      } 
      return of(false);
    }
}