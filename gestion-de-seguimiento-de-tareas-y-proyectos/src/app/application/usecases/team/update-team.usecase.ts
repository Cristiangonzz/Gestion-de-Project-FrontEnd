import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';

import { ITeamDomainModel } from 'src/app/domain/interfaces/team/team.interface.domain';
import { IUpdateTeamModel } from 'src/app/domain/interfaces/team/update-team.interface.domain';
import { TeamService } from 'src/app/domain/services/team/team.service';
import { Injectable } from '@angular/core';
import { TeamImplementationRepository } from 'src/app/data/repositories/team/team-implementation.repository';

@Injectable({
    providedIn: 'root'
})
export class UpdateTeamUseCase implements UseCase<IUpdateTeamModel, ITeamDomainModel> {

    constructor(private teamService: TeamImplementationRepository) { }

    execute(data :IUpdateTeamModel): Observable<ITeamDomainModel> {
        return this.teamService.updateTeam(data);
    }
}