import { Observable } from 'rxjs';
import { UseCase } from 'src/domain/use-case';
import { CollaborationService } from 'src/domain/services/collaboration/collaboration.service';

export class DeleteCollaborationUseCase implements UseCase<string, boolean> {

    constructor(private collaborationService: CollaborationService) { }

    execute(data : string): Observable<boolean> {
        return this.collaborationService.deleteCollaboration(data);
    }
}