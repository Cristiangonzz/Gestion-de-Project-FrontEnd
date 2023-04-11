import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { ITeamDomainModel } from 'src/app/domain/interfaces/team/team.interface.domain';
import { TeamService } from 'src/app/domain/services/team/team.service';
import { IAgregateCollaborationOfTeamModel } from 'src/app/domain/interfaces/collaboration/agregate-collaboration-of-team.dto';
import { Injectable } from '@angular/core';
import { TeamImplementationRepository } from 'src/app/data/repositories/team/team-implementation.repository';

@Injectable({
    providedIn: 'root'
})
export class AggregateCollaborationOfTeamUseCase implements UseCase<IAgregateCollaborationOfTeamModel, ITeamDomainModel> {

    constructor(private teamService: TeamImplementationRepository) { }

    execute(
        params: IAgregateCollaborationOfTeamModel): Observable<ITeamDomainModel> {
        return this.teamService.aggregateCollaborationOfTeam(params);
    }
}