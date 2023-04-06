import { Observable } from 'rxjs';
import { UseCase } from 'src/domain/use-case';
import { ITeamDomainModel } from 'src/domain/interfaces/team/team.interface.domain';
import { TeamService } from 'src/domain/services/team/team.service';
import { IAgregateCollaborationOfTeamModel } from 'src/domain/interfaces/collaboration/agregate-collaboration-of-team.dto';

export class AggregateCollaborationOfTeamUseCase implements UseCase<IAgregateCollaborationOfTeamModel, ITeamDomainModel> {

    constructor(private teamService: TeamService) { }

    execute(
        params: IAgregateCollaborationOfTeamModel): Observable<ITeamDomainModel> {
        return this.teamService.aggregateCollaborationOfTeam(params);
    }
}