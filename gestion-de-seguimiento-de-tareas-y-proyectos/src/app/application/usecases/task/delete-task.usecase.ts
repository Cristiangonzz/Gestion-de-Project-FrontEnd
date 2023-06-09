import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { TaskService } from 'src/app/domain/services/task/task.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DeleteTaskUseCase implements UseCase<string, boolean> {

    constructor(private taskService: TaskService) { }

    execute(data : string): Observable<boolean> {
        return this.taskService.deleteTask(data);
    }
}