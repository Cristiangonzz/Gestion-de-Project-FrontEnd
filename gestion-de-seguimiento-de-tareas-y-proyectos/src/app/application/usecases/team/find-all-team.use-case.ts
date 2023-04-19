import { BehaviorSubject, Observable, asyncScheduler } from 'rxjs';
import { Injectable } from '@angular/core';
import { ITeamDomainModel } from 'src/app/domain/interfaces/team/team.interface.domain';
import { TeamService } from 'src/app/domain/services/team/team.service';

@Injectable({
    providedIn: 'root'
})
export class FindAllTeamUseCase  {

    constructor(private teamService: TeamService) { }
    private status : ITeamDomainModel[] =  [];
    
    public statusEmmit : BehaviorSubject<ITeamDomainModel[]>
    = new BehaviorSubject<ITeamDomainModel[]>(this.status);
    
    execute = () =>{
        
        if(this.statusEmmit.observed && !this.statusEmmit.closed){
        this.teamService.findAllTeam()
                .subscribe({
                    next: (value:ITeamDomainModel[] ) => { this.status = value; },
                    complete: () => 
                    {
                        this.statusEmmit.next(this.status);
                        console.log("complete");
                        asyncScheduler.schedule(this.execute, 1000); 
                    }
                });
        } else {
            asyncScheduler.schedule(this.execute, 100);
        }   

    }
}