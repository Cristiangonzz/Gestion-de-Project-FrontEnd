import { Observable } from 'rxjs';
import { UseCase } from 'src/domain/use-case';
import { TaskService } from 'src/domain/services/task/task.service';

export class DeleteTaskUseCase implements UseCase<string, boolean> {

    constructor(private taskService: TaskService) { }

    execute(data : string): Observable<boolean> {
        return this.taskService.deleteTask(data);
    }
}