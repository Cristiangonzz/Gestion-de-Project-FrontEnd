import { Observable } from 'rxjs';

import { IProjectDomainModel } from 'src/app/domain/interfaces/proyect/proyect.interface.domain';
import { IUpdateProjectModel } from 'src/app/domain/interfaces/proyect/update-proyect.interface.domain';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export abstract class ProjectService {

    abstract deleteProject(data: string): Observable<boolean>;
    
    abstract getProject(data :string): Observable<IProjectDomainModel>;

    abstract findAllProject(): Observable<IProjectDomainModel[]>;
    
    abstract register(params: IProjectDomainModel ): Observable<IProjectDomainModel>;

    abstract updateProject(entity: IUpdateProjectModel): Observable<IProjectDomainModel>;
}