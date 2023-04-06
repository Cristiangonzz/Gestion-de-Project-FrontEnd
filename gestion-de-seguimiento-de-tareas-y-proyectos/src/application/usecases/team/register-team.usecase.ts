import { Observable } from 'rxjs';
import { UseCase } from 'src/domain/use-case';
import { ITeamDomainModel } from 'src/domain/interfaces/team/team.interface.domain';
import { TeamService } from 'src/domain/services/team/team.service';

export class RegisterTeamUseCase implements UseCase<ITeamDomainModel, ITeamDomainModel> {

    constructor(private teamService: TeamService) { }

    execute(
        params: ITeamDomainModel): Observable<ITeamDomainModel> {
        return this.teamService.register(params);
    }
}