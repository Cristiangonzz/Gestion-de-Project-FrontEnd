import { Observable } from 'rxjs';
import { UseCase } from 'src/domain/use-case';

import { ITeamDomainModel } from 'src/domain/interfaces/team/team.interface.domain';
import { IUpdateTeamModel } from 'src/domain/interfaces/team/update-team.interface.domain';
import { TeamService } from 'src/domain/services/team/team.service';

export class UpdateTeamUseCase implements UseCase<IUpdateTeamModel, ITeamDomainModel> {

    constructor(private teamService: TeamService) { }

    execute(data :IUpdateTeamModel): Observable<ITeamDomainModel> {
        return this.teamService.updateTeam(data);
    }
}