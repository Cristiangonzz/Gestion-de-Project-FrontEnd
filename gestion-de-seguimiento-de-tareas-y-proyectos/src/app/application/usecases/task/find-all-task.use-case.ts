import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { Injectable } from '@angular/core';
import { TaskService } from 'src/app/domain/services/task/task.service';
import { ITaskDomainModel } from 'src/app/domain/interfaces/task/task.entity.domain';

@Injectable({
    providedIn: 'root'
})
export class FindAllTaskUseCase implements UseCase<undefined, ITaskDomainModel[]> {

    constructor(private taskService: TaskService) { }

    execute(): Observable<ITaskDomainModel[]> {
        return this.taskService.findAllTask();
    }
}