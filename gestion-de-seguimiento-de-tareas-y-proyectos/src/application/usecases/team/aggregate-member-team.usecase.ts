import { Observable } from 'rxjs';
import { UseCase } from 'src/domain/use-case';
import { ITeamDomainModel } from 'src/domain/interfaces/team/team.interface.domain';
import { TeamService } from 'src/domain/services/team/team.service';
import { IAgregateMemberOfTeamModel } from 'src/domain/interfaces/member/agregate-member-of-team.dto';

export class AggregateMemberOfTeamUseCase implements UseCase<IAgregateMemberOfTeamModel,ITeamDomainModel> {

    constructor(private teamService: TeamService) { }

    execute(
        params: IAgregateMemberOfTeamModel): Observable<ITeamDomainModel> {
        return this.teamService.aggregateMemberOfTeam(params);
    }
}