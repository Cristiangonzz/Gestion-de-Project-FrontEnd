import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { ITeamDomainModel } from 'src/app/domain/interfaces/team/team.interface.domain';
import { TeamService } from 'src/app/domain/services/team/team.service';
import { Injectable } from '@angular/core';
import { TeamImplementationRepository } from 'src/app/data/repositories/team/team-implementation.repository';

@Injectable({
    providedIn: 'root'
})
export class GetTeamUseCase implements UseCase<string, ITeamDomainModel> {

    constructor(private teamService: TeamService) { }

    execute(data : string): Observable<ITeamDomainModel> {
        return this.teamService.getTeam(data);
    }
}