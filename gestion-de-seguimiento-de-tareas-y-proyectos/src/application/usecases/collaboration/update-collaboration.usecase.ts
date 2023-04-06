import { Observable } from 'rxjs';
import { UseCase } from 'src/domain/use-case';
import { ICollaborationDomainModel } from 'src/domain/interfaces/collaboration/collaboration.interface.domain';
import { IUpdateCollaborationModel } from 'src/domain/interfaces/collaboration/update-collaboration.interface.domain';
import { CollaborationService } from 'src/domain/services/collaboration/collaboration.service';

export class UpdateCollaborationUseCase implements UseCase<IUpdateCollaborationModel, ICollaborationDomainModel> {

    constructor(private collaborationService: CollaborationService) { }

    execute(data :IUpdateCollaborationModel): Observable<ICollaborationDomainModel> {
        return this.collaborationService.updateCollaboration(data);
    }
}