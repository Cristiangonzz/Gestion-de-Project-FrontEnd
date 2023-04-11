import { Injectable } from '@angular/core';
import { UseCase } from 'src/app/domain/use-case';
import { Observable, of } from 'rxjs';

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