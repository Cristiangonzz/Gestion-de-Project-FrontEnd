import { Observable } from 'rxjs';
import { UseCase } from 'src/domain/use-case';
import { IProjectDomainModel } from 'src/domain/interfaces/proyect/proyect.interface.domain';
import { ProjectService } from 'src/domain/services/proyect/proyect.service';

export class GetProjectUseCase implements UseCase<string, IProjectDomainModel> {

    constructor(private projectService: ProjectService) { }

    execute(data : string): Observable<IProjectDomainModel> {
        return this.projectService.getProject(data);
    }
}