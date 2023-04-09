import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { IProjectDomainModel } from 'src/app/domain/interfaces/proyect/proyect.interface.domain';
import { ProjectService } from 'src/app/domain/services/proyect/proyect.service';

export class RegisterProjectUseCase implements UseCase<IProjectDomainModel, IProjectDomainModel> {

    constructor(private projectService: ProjectService) { }

    execute(
        params: IProjectDomainModel): Observable<IProjectDomainModel> {
        return this.projectService.register(params);
    }
}