import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { TaskService } from 'src/app/domain/services/task/task.service';
import { Injectable } from '@angular/core';
import { TaskImplementationRepository } from 'src/app/data/repositories/task/task-implementation.repository';

@Injectable({
    providedIn: 'root'
})
export class DeleteTaskUseCase implements UseCase<string, boolean> {

    constructor(private taskService: TaskImplementationRepository) { }

    execute(data : string): Observable<boolean> {
        return this.taskService.deleteTask(data);
    }
}