import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { AggregateTaskOfTeamUseCase } from "./aggregate-task-team.usecase";
import { TeamService } from "src/app/domain/services/team/team.service";
import { ITeamDomainModel } from "src/app/domain/interfaces/team/team.interface.domain";
import { IAgregateTaskOfTeamModel } from "src/app/domain/interfaces/task/agregate-task-of-team.dto";



describe('AggregateTaskOfTeamUseCase', () => {
    let useCase: AggregateTaskOfTeamUseCase;
    let service: TeamService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          AggregateTaskOfTeamUseCase,
          {
            provide: TeamService,
            useValue: jasmine.createSpyObj('TeamService', ['aggregateTaskOfTeam'])
          }
        ]
      });
  
      useCase = TestBed.inject(AggregateTaskOfTeamUseCase);
      service = TestBed.inject(TeamService);
    });
  
    it('should call aggregateTaskOfTeam function of the service and return an Observable with ITeamDomainModel', () => {
      const entity: ITeamDomainModel = {
        name: 'Team Name',
        member: ['member-id-1', 'member-id-2'],
        task: ['123123123'],
        project: 'project-id',
        collaboration: ['collaboration-id-1', 'collaboration-id-2']
      };

      const param : IAgregateTaskOfTeamModel = {
        team: "string",
        task: "123123123",
      };

      (service.aggregateTaskOfTeam as jasmine.Spy).and.returnValue(of(entity));
  
      useCase.execute(param).subscribe(result => {
        expect(result).toEqual(entity);
        expect(service.aggregateTaskOfTeam).toHaveBeenCalledWith(param);
      });
    });
  });