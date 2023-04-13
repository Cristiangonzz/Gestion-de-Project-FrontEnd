import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HasUserUseCase  {

    private status : boolean = false;
    public statusEmmit : BehaviorSubject<boolean> =new BehaviorSubject<boolean>(this.status)

    execute():boolean{
        if(typeof localStorage.getItem('token') === 'string'){
            this.status = true;
            this.statusEmmit.next(this.status);
            return true;
          }
          this.status = false;
          this.statusEmmit.next(this.status);
          return false;
    }
}