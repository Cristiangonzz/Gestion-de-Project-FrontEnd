import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { ProjectService } from 'src/app/domain/services/proyect/proyect.service';

export class DeleteProjectUseCase implements UseCase<string, boolean> {

    constructor(private projectService: ProjectService) { }

    execute(data : string): Observable<boolean> {
        return this.projectService.deleteProject(data);
    }
}