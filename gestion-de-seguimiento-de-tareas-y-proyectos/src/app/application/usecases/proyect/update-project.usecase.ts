import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { IProjectDomainModel } from 'src/app/domain/interfaces/proyect/proyect.interface.domain';
import { IUpdateProjectModel } from 'src/app/domain/interfaces/proyect/update-proyect.interface.domain';
import { ProjectService } from 'src/app/domain/services/proyect/proyect.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UpdateProjectUseCase implements UseCase<IUpdateProjectModel, IProjectDomainModel> {

    constructor(private projectService: ProjectService) { }

    execute(data :IUpdateProjectModel): Observable<IProjectDomainModel> {
        return this.projectService.updateProject(data);
    }
}