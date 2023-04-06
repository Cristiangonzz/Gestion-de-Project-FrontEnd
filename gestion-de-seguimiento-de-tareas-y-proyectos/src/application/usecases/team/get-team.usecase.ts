import { Observable } from 'rxjs';
import { UseCase } from 'src/domain/use-case';
import { ITeamDomainModel } from 'src/domain/interfaces/team/team.interface.domain';
import { TeamService } from 'src/domain/services/team/team.service';

export class GetTeamUseCase implements UseCase<string, ITeamDomainModel> {

    constructor(private teamService: TeamService) { }

    execute(data : string): Observable<ITeamDomainModel> {
        return this.teamService.getTeam(data);
    }
}