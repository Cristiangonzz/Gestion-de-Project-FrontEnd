import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { AggregateCollaborationOfTeamUseCase } from "./aggregate-collaboration-team.usecase";
import { TeamService } from "src/app/domain/services/team/team.service";
import { IAgregateCollaborationOfTeamModel } from "src/app/domain/interfaces/collaboration/agregate-collaboration-of-team.dto";
import { ITeamDomainModel } from "src/app/domain/interfaces/team/team.interface.domain";



describe('AggregateCollaborationOfTeamUseCase', () => {
    let useCase: AggregateCollaborationOfTeamUseCase;
    let service: TeamService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          AggregateCollaborationOfTeamUseCase,
          {
            provide: TeamService,
            useValue: jasmine.createSpyObj('TeamService', ['aggregateCollaborationOfTeam'])
          }
        ]
      });
  
      useCase = TestBed.inject(AggregateCollaborationOfTeamUseCase);
      service = TestBed.inject(TeamService);
    });
  
    it('should call aggregateCollaborationOfTeam function of the service and return an Observable with ITeamDomainModel', () => {
      const entity: ITeamDomainModel = {
        name: 'Team Name',
        member: ['123123as123'],
        task: ['string'],
        project: 'project-id',
        collaboration: ['123123123']
      };

      const param : IAgregateCollaborationOfTeamModel = {
        team: "string",
        collaboration: "123123123",
      };

      (service.aggregateCollaborationOfTeam as jasmine.Spy).and.returnValue(of(entity));
  
      useCase.execute(param).subscribe(result => {
        expect(result).toEqual(entity);
        expect(service.aggregateCollaborationOfTeam).toHaveBeenCalledWith(param);
      });
    });
  });