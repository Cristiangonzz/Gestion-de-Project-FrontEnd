import { Observable } from 'rxjs';
import { UseCase } from 'src/domain/use-case';
import { ITaskDomainModel } from 'src/domain/interfaces/task/task.entity.domain';
import { IUpdateTaskModel } from 'src/domain/interfaces/task/update-task.interface.domain';
import { TaskService } from 'src/domain/services/task/task.service';

export class UpdateTaskUseCase implements UseCase<IUpdateTaskModel, ITaskDomainModel> {

    constructor(private taskService: TaskService) { }

    execute(data :IUpdateTaskModel): Observable<ITaskDomainModel> {
        return this.taskService.updateTask(data);
    }
}