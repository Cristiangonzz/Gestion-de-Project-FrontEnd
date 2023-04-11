import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { TeamService } from 'src/app/domain/services/team/team.service';
import { Injectable } from '@angular/core';
import { TeamImplementationRepository } from 'src/app/data/repositories/team/team-implementation.repository';

@Injectable({
    providedIn: 'root'
})
export class DeleteTeamUseCase implements UseCase<string, boolean> {

    constructor(private teamService: TeamImplementationRepository) { }

    execute(data : string): Observable<boolean> {
        return this.teamService.deleteTeam(data);
    }
}