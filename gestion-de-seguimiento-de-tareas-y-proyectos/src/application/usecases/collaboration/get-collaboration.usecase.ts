import { Observable } from 'rxjs';
import { UseCase } from 'src/domain/use-case';
import { ICollaborationDomainModel } from 'src/domain/interfaces/collaboration/collaboration.interface.domain';
import { CollaborationService } from 'src/domain/services/collaboration/collaboration.service';

export class GetCollaborationUseCase implements UseCase<string, ICollaborationDomainModel> {

    constructor(private collaborationService: CollaborationService) { }

    execute(data : string): Observable<ICollaborationDomainModel> {
        return this.collaborationService.getCollaboration(data);
    }
}