import { BehaviorSubject, Observable, asyncScheduler } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { Injectable } from '@angular/core';
import { TaskService } from 'src/app/domain/services/task/task.service';
import { ITaskDomainModel } from 'src/app/domain/interfaces/task/task.entity.domain';

@Injectable({
    providedIn: 'root'
})
export class FindAllTaskUseCase  {

    constructor(private taskService: TaskService) { }

    
    private status : ITaskDomainModel[] =  [];
    
    public statusEmmit : BehaviorSubject<ITaskDomainModel[]>
    = new BehaviorSubject<ITaskDomainModel[]>(this.status);
    
    execute = () =>{
        
        if(this.statusEmmit.observed && !this.statusEmmit.closed){
        this.taskService.findAllTask()
                .subscribe({
                    next: (value:ITaskDomainModel[] ) => { this.status = value; },
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