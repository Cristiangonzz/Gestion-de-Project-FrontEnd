import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { ITaskDomainModel } from 'src/app/domain/interfaces/task/task.entity.domain';
import { TaskService } from 'src/app/domain/services/task/task.service';

export class RegisterTaskUseCase implements UseCase<ITaskDomainModel, ITaskDomainModel> {

    constructor(private taskService: TaskService) { }

    execute(
        params: ITaskDomainModel): Observable<ITaskDomainModel> {
        return this.taskService.register(params);
    }
}