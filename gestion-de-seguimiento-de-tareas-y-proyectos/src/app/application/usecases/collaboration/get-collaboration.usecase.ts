import { Observable } from 'rxjs';
import { ICollaborationDomainModel } from 'src/app/domain/interfaces/collaboration/collaboration.interface.domain';
import { CollaborationService } from 'src/app/domain/services/collaboration/collaboration.service';
import { UseCase } from 'src/app/domain/use-case';

export class GetCollaborationUseCase implements UseCase<string, ICollaborationDomainModel> {

    constructor(private collaborationService: CollaborationService) { }

    execute(data : string): Observable<ICollaborationDomainModel> {
        return this.collaborationService.getCollaboration(data);
    }
}