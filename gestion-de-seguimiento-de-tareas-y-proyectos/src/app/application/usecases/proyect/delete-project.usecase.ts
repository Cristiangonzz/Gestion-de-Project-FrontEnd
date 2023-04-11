import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { ProjectService } from 'src/app/domain/services/proyect/proyect.service';
import { Injectable } from '@angular/core';
import { ProjectImplementationRepository } from 'src/app/data/repositories/project/project-implementation.repository';

@Injectable({
    providedIn: 'root'
})
export class DeleteProjectUseCase implements UseCase<string, boolean> {

    constructor(private projectService: ProjectImplementationRepository) { }

    execute(data : string): Observable<boolean> {
        return this.projectService.deleteProject(data);
    }
}