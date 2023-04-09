import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { ITeamDomainModel } from 'src/app/domain/interfaces/team/team.interface.domain';
import { TeamService } from 'src/app/domain/services/team/team.service';
import { IAgregateTaskOfTeamModel } from 'src/app/domain/interfaces/task/agregate-task-of-team.dto';

export class AggregateTaskOfTeamUseCase implements UseCase<IAgregateTaskOfTeamModel, ITeamDomainModel> {

    constructor(private teamService: TeamService) { }

    execute(
        params: IAgregateTaskOfTeamModel): Observable<ITeamDomainModel> {
        return this.teamService.aggregateTaskOfTeam(params);
    }
}