import { Observable } from 'rxjs';
import { UseCase } from 'src/domain/use-case';
import { ICollaborationDomainModel } from 'src/domain/interfaces/collaboration/collaboration.interface.domain';
import { CollaborationService } from 'src/domain/services/collaboration/collaboration.service';

export class RegisterCollaborationUseCase implements UseCase<ICollaborationDomainModel, ICollaborationDomainModel> {

    constructor(private collaborationService: CollaborationService) { }

    execute(
        params: ICollaborationDomainModel): Observable<ICollaborationDomainModel> {
        return this.collaborationService.register(params);
    }
}