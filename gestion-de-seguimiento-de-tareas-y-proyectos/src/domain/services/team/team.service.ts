import { Observable } from 'rxjs';

import { ITeamDomainModel } from 'src/domain/interfaces/team/team.interface.domain';
import { IUpdateTeamModel } from 'src/domain/interfaces/team/update-team.interface.domain';
import { IAgregateTaskOfTeamModel } from 'src/domain/interfaces/task/agregate-task-of-team.dto';
import { IAgregateMemberOfTeamModel } from 'src/domain/interfaces/member/agregate-member-of-team.dto';
import { IAgregateCollaborationOfTeamModel } from 'src/domain/interfaces/collaboration/agregate-collaboration-of-team.dto';

export abstract class TeamService {
    
    abstract deleteTeam(data: string): Observable<boolean>;
    
    abstract getTeam(data :string): Observable<ITeamDomainModel>;
    
    abstract register(params: ITeamDomainModel ): Observable<ITeamDomainModel>;
    
    abstract updateTeam(entity: IUpdateTeamModel): Observable<ITeamDomainModel>;
    
    abstract aggregateTaskOfTeam(params: IAgregateTaskOfTeamModel): Observable<ITeamDomainModel>;
   
    abstract aggregateMemberOfTeam(params: IAgregateMemberOfTeamModel): Observable<ITeamDomainModel>;
    
    abstract aggregateCollaborationOfTeam(params: IAgregateCollaborationOfTeamModel): Observable<ITeamDomainModel>;

}