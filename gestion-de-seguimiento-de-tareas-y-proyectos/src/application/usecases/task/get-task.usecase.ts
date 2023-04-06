import { Observable } from 'rxjs';
import { UseCase } from 'src/domain/use-case';
import { ITaskDomainModel } from 'src/domain/interfaces/task/task.entity.domain';
import { TaskService } from 'src/domain/services/task/task.service';

export class GetTaskUseCase implements UseCase<string, ITaskDomainModel> {

    constructor(private taskService: TaskService) { }

    execute(data : string): Observable<ITaskDomainModel> {
        return this.taskService.getTask(data);
    }
}