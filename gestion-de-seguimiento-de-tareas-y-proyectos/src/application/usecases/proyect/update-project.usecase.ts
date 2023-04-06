import { Observable } from 'rxjs';
import { UseCase } from 'src/domain/use-case';
import { IProjectDomainModel } from 'src/domain/interfaces/proyect/proyect.interface.domain';
import { IUpdateProjectModel } from 'src/domain/interfaces/proyect/update-proyect.interface.domain';
import { ProjectService } from 'src/domain/services/proyect/proyect.service';

export class UpdateProjectUseCase implements UseCase<IUpdateProjectModel, IProjectDomainModel> {

    constructor(private projectService: ProjectService) { }

    execute(data :IUpdateProjectModel): Observable<IProjectDomainModel> {
        return this.projectService.updateProject(data);
    }
}