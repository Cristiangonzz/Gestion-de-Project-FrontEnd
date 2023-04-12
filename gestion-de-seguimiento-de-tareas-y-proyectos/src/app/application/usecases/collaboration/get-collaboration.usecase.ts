import { Observable } from 'rxjs';
import { ICollaborationDomainModel } from 'src/app/domain/interfaces/collaboration/collaboration.interface.domain';
import { CollaborationService } from 'src/app/domain/services/collaboration/collaboration.service';
import { UseCase } from 'src/app/domain/use-case';
import { Injectable } from '@angular/core';
import { CollaborationImplementationRepository } from 'src/app/data/repositories/collaboration/collaboration-implementation.repository';

@Injectable({
    providedIn: 'root'
})
export class GetCollaborationUseCase implements UseCase<string, ICollaborationDomainModel> {

    constructor(private collaborationService: CollaborationImplementationRepository) { }

    execute(data : string): Observable<ICollaborationDomainModel> {
        return this.collaborationService.getCollaboration(data);
    }
}