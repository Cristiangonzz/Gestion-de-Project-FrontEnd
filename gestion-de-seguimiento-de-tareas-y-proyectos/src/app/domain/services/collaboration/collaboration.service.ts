import { Observable } from 'rxjs';
import { ICollaborationDomainModel } from 'src/app/domain/interfaces/collaboration/collaboration.interface.domain';
import { IUpdateCollaborationModel } from 'src/app/domain/interfaces/collaboration/update-collaboration.interface.domain';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class CollaborationService {
    
    abstract deleteCollaboration(data: string): Observable<boolean>;
    
    abstract getCollaboration(data :string): Observable<ICollaborationDomainModel>;
    
    abstract findAllCollaboration(): Observable<ICollaborationDomainModel[]>;
    
    abstract register(params: ICollaborationDomainModel ): Observable<ICollaborationDomainModel>;
    
    abstract updateCollaboration(entity: IUpdateCollaborationModel): Observable<ICollaborationDomainModel>;
}