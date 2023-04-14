import { Observable } from 'rxjs';

import { ITaskDomainModel } from 'src/app/domain/interfaces/task/task.entity.domain';
import { IUpdateTaskModel } from 'src/app/domain/interfaces/task/update-task.interface.domain';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export abstract class TaskService {
    getTaskUseCase(getTaskUseCase: any, arg1: string) {
        throw new Error('Method not implemented.');
    }
  
    abstract deleteTask(data: string): Observable<boolean>;

    abstract getTask(data :string): Observable<ITaskDomainModel>;
    
    abstract register(params: ITaskDomainModel ): Observable<ITaskDomainModel>;
    
    abstract updateTask(entity: IUpdateTaskModel): Observable<ITaskDomainModel>;

}