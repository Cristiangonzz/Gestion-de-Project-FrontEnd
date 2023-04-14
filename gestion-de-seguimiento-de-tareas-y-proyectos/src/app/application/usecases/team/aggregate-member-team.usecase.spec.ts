import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { TeamService } from "src/app/domain/services/team/team.service";
import { AggregateMemberOfTeamUseCase } from "./aggregate-member-team.usecase";
import { IAgregateMemberOfTeamModel } from "src/app/domain/interfaces/member/agregate-member-of-team.dto";
import { ITeamDomainModel } from "src/app/domain/interfaces/team/team.interface.domain";



describe('AggregateMemberOfTeamUseCase', () => {
    let useCase: AggregateMemberOfTeamUseCase;
    let service: TeamService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          AggregateMemberOfTeamUseCase,
          {
            provide: TeamService,
            useValue: jasmine.createSpyObj('TeamService', ['aggregateMemberOfTeam'])
          }
        ]
      });
  
      useCase = TestBed.inject(AggregateMemberOfTeamUseCase);
      service = TestBed.inject(TeamService);
    });
  
    it('should call aggregateMemberOfTeam function of the service and return an Observable with ITeamDomainModel', () => {
      const entity: ITeamDomainModel = {
        name: 'Team Name',
        member: ['123123123'],
        task: ['string'],
        project: 'project-id',
        collaboration: ['collaboration-id-1', 'collaboration-id-2']
      };

      const param : IAgregateMemberOfTeamModel = {
        team: "string",
        member: "123123123",
      };

      (service.aggregateMemberOfTeam as jasmine.Spy).and.returnValue(of(entity));
  
      useCase.execute(param).subscribe(result => {
        expect(result).toEqual(entity);
        expect(service.aggregateMemberOfTeam).toHaveBeenCalledWith(param);
      });
    });
  });