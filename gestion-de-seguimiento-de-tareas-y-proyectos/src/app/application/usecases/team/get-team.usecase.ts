import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { ITeamDomainModel } from 'src/app/domain/interfaces/team/team.interface.domain';
import { TeamService } from 'src/app/domain/services/team/team.service';

export class GetTeamUseCase implements UseCase<string, ITeamDomainModel> {

    constructor(private teamService: TeamService) { }

    execute(data : string): Observable<ITeamDomainModel> {
        return this.teamService.getTeam(data);
    }
}