import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { ITaskDomainModel } from 'src/app/domain/interfaces/task/task.entity.domain';
import { IUpdateTaskModel } from 'src/app/domain/interfaces/task/update-task.interface.domain';
import { TaskService } from 'src/app/domain/services/task/task.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UpdateTaskUseCase implements UseCase<IUpdateTaskModel, ITaskDomainModel> {

    constructor(private taskService: TaskService) { }

    execute(data :IUpdateTaskModel): Observable<ITaskDomainModel> {
        return this.taskService.updateTask(data);
    }
}