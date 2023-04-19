import { BehaviorSubject, Observable, Subscription, asyncScheduler, switchMap } from 'rxjs';
import { ICollaborationDomainModel } from 'src/app/domain/interfaces/collaboration/collaboration.interface.domain';
import { CollaborationService } from 'src/app/domain/services/collaboration/collaboration.service';
import { UseCase } from 'src/app/domain/use-case';
import { Injectable, OnDestroy } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FindAllCollaborationUseCase {    
    private status : ICollaborationDomainModel[] =  [];

    public statusEmmit : BehaviorSubject<ICollaborationDomainModel[]>
     = new BehaviorSubject<ICollaborationDomainModel[]>(this.status);

    constructor(private collaborationService: CollaborationService) { }
  

    execute = () =>{
        
        if(this.statusEmmit.observed && !this.statusEmmit.closed){
           this.collaborationService.findAllCollaboration()
                .subscribe({
                    next: (value:ICollaborationDomainModel[] ) => { this.status = value; },
                    complete: () => 
                    {
                        this.statusEmmit.next(this.status);
                        console.log("complete");
                        asyncScheduler.schedule(this.execute, 1000); 
                    }
                });
        } else {
            asyncScheduler.schedule(this.execute, 100);
        }   
    }

}
/**  updateUserAccountsTable = () => {
    if(this.userAccountsEmitter.observed && !this.userAccountsEmitter.closed && this.auth.currentUser?.customer?.id && this.guard.canActivate()){
        this.api.getAllAccountsByCustomerId(this.auth.currentUser?.customer?.id).subscribe({
        next: (value) => { this.newUserDataAccounts = value; },
        complete: () => 
        {
          this.userAccountsEmitter.next(this.newUserDataAccounts);
          asyncScheduler.schedule(this.updateUserAccountsTable, 1000); 
        }
        });
    } else {
      asyncScheduler.schedule(this.updateUserAccountsTable, 100);
    }
  } */