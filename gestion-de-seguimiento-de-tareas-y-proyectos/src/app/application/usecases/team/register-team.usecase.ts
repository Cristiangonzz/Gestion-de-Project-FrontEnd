import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { ITeamDomainModel } from 'src/app/domain/interfaces/team/team.interface.domain';
import { TeamService } from 'src/app/domain/services/team/team.service';
import { Injectable } from '@angular/core';
import { TeamImplementationRepository } from 'src/app/data/repositories/team/team-implementation.repository';

@Injectable({
    providedIn: 'root'
})
export class RegisterTeamUseCase implements UseCase<ITeamDomainModel, ITeamDomainModel> {

    constructor(private teamService: TeamService) { }

    execute(
        params: ITeamDomainModel): Observable<ITeamDomainModel> {
        return this.teamService.register(params);
    }
}