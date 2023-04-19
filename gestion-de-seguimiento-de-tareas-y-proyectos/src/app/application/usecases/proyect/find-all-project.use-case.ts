import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { Injectable } from '@angular/core';
import { IProjectDomainModel } from 'src/app/domain/interfaces/proyect/proyect.interface.domain';
import { ProjectService } from 'src/app/domain/services/proyect/proyect.service';

@Injectable({
    providedIn: 'root'
})
export class FindAllProjectUseCase implements UseCase<undefined, IProjectDomainModel[]> {

    constructor(private projectService: ProjectService) { }

    execute(): Observable<IProjectDomainModel[]> {
        return this.projectService.findAllProject();
    }
}