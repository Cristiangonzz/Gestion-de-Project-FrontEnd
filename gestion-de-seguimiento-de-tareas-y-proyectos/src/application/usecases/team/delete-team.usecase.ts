import { Observable } from 'rxjs';
import { UseCase } from 'src/domain/use-case';
import { TeamService } from 'src/domain/services/team/team.service';

export class DeleteTeamUseCase implements UseCase<string, boolean> {

    constructor(private teamService: TeamService) { }

    execute(data : string): Observable<boolean> {
        return this.teamService.deleteTeam(data);
    }
}