import { Observable } from 'rxjs';
import { CollaborationService } from 'src/app/domain/services/collaboration/collaboration.service';
import { UseCase } from 'src/app/domain/use-case';

export class DeleteCollaborationUseCase implements UseCase<string, boolean> {

    constructor(private collaborationService: CollaborationService) { }

    execute(data : string): Observable<boolean> {
        return this.collaborationService.deleteCollaboration(data);
    }
}