import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { Injectable } from '@angular/core';
import { ITeamDomainModel } from 'src/app/domain/interfaces/team/team.interface.domain';
import { TeamService } from 'src/app/domain/services/team/team.service';

@Injectable({
    providedIn: 'root'
})
export class FindAllTeamUseCase implements UseCase<undefined, ITeamDomainModel[]> {

    constructor(private teamService: TeamService) { }

    execute(): Observable<ITeamDomainModel[]> {
        return this.teamService.findAllTeam();
    }
}