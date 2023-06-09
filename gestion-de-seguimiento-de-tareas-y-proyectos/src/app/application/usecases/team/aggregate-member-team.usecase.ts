import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { ITeamDomainModel } from 'src/app/domain/interfaces/team/team.interface.domain';
import { IAgregateMemberOfTeamModel } from 'src/app/domain/interfaces/member/agregate-member-of-team.dto';
import { Injectable } from '@angular/core';
import { TeamService } from 'src/app/domain/services/team/team.service';

@Injectable({
    providedIn: 'root'
})
export class AggregateMemberOfTeamUseCase implements UseCase<IAgregateMemberOfTeamModel,ITeamDomainModel> {

    constructor(private teamService: TeamService) { }

    execute(params: IAgregateMemberOfTeamModel): Observable<ITeamDomainModel> {
        return this.teamService.aggregateMemberOfTeam(params);
    }
}