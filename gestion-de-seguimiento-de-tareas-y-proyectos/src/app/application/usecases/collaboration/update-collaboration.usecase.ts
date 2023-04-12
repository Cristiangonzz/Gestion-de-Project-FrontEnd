import { Observable } from 'rxjs';
import { ICollaborationDomainModel } from 'src/app/domain/interfaces/collaboration/collaboration.interface.domain';
import { IUpdateCollaborationModel } from 'src/app/domain/interfaces/collaboration/update-collaboration.interface.domain';
import { CollaborationService } from 'src/app/domain/services/collaboration/collaboration.service';
import { UseCase } from 'src/app/domain/use-case';
import { Injectable } from '@angular/core';
import { CollaborationImplementationRepository } from 'src/app/data/repositories/collaboration/collaboration-implementation.repository';

@Injectable({
    providedIn: 'root'
})
export class UpdateCollaborationUseCase implements UseCase<IUpdateCollaborationModel, ICollaborationDomainModel> {

    constructor(private collaborationService: CollaborationService) { }

    execute(data :IUpdateCollaborationModel): Observable<ICollaborationDomainModel> {
        return this.collaborationService.updateCollaboration(data);
    }
}