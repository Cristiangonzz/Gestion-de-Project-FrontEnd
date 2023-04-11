import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { ITaskDomainModel } from 'src/app/domain/interfaces/task/task.entity.domain';
import { IUpdateTaskModel } from 'src/app/domain/interfaces/task/update-task.interface.domain';
import { TaskService } from 'src/app/domain/services/task/task.service';
import { Injectable } from '@angular/core';
import { TaskImplementationRepository } from 'src/app/data/repositories/task/task-implementation.repository';

@Injectable({
    providedIn: 'root'
})
export class UpdateTaskUseCase implements UseCase<IUpdateTaskModel, ITaskDomainModel> {

    constructor(private taskService: TaskImplementationRepository) { }

    execute(data :IUpdateTaskModel): Observable<ITaskDomainModel> {
        return this.taskService.updateTask(data);
    }
}