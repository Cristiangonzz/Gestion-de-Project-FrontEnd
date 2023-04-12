import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { IProjectDomainModel } from 'src/app/domain/interfaces/proyect/proyect.interface.domain';
import { ProjectService } from 'src/app/domain/services/proyect/proyect.service';
import { Injectable } from '@angular/core';
import { ProjectImplementationRepository } from 'src/app/data/repositories/project/project-implementation.repository';

@Injectable({
    providedIn: 'root'
})
export class GetProjectUseCase implements UseCase<string, IProjectDomainModel> {

    constructor(private projectService: ProjectImplementationRepository) { }

    execute(data : string): Observable<IProjectDomainModel> {
        return this.projectService.getProject(data);
    }
}