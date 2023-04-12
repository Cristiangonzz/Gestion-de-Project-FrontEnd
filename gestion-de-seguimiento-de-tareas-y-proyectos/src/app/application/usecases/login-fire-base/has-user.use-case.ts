import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class HasUserUseCase  {
    execute():boolean{
        if(typeof localStorage.getItem('token') === 'string'){
            return true;
          }
          return false;
    }
}