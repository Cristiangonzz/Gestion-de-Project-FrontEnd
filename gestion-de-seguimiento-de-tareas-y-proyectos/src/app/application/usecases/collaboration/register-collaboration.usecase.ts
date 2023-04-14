import { Observable } from 'rxjs';
import { ICollaborationDomainModel } from 'src/app/domain/interfaces/collaboration/collaboration.interface.domain';
import { CollaborationService } from 'src/app/domain/services/collaboration/collaboration.service';
import { UseCase } from 'src/app/domain/use-case';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class RegisterCollaborationUseCase implements UseCase<ICollaborationDomainModel, ICollaborationDomainModel> {

    constructor(private collaborationService: CollaborationService) { }

    execute(
        params: ICollaborationDomainModel): Observable<ICollaborationDomainModel> {
        return this.collaborationService.register(params);
    }
}