import { BehaviorSubject, Observable, asyncScheduler } from 'rxjs';
import { Injectable } from '@angular/core';
import { IProjectDomainModel } from 'src/app/domain/interfaces/proyect/proyect.interface.domain';
import { ProjectService } from 'src/app/domain/services/proyect/proyect.service';

@Injectable({
    providedIn: 'root'
})
export class FindAllProjectUseCase {

    constructor(private projectService: ProjectService) { }

  
    private status : IProjectDomainModel[] =  [];
    
    public statusEmmit : BehaviorSubject<IProjectDomainModel[]>
    = new BehaviorSubject<IProjectDomainModel[]>(this.status);
    
    execute = () =>{
        
        if(this.statusEmmit.observed && !this.statusEmmit.closed){
        this.projectService.findAllProject()
                .subscribe({
                    next: (value:IProjectDomainModel[] ) => { this.status = value; },
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