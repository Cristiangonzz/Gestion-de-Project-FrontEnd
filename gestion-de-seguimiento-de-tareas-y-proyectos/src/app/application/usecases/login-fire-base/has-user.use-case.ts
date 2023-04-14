import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';

@Injectable({
    providedIn: 'root'
})
export class HasUserUseCase implements UseCase<undefined,boolean> {

    private status : boolean = false;
    public statusEmmit : BehaviorSubject<boolean> =new BehaviorSubject<boolean>(this.status)

    execute():Observable<boolean>{
        if(typeof localStorage.getItem('token') === 'string'){
            this.status = true;
            this.statusEmmit.next(this.status);
            return of(true);
          }
          this.status = false;
          this.statusEmmit.next(this.status);
          return of(false);
    }
}