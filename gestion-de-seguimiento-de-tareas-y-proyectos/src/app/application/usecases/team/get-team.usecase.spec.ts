import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { TeamService } from "src/app/domain/services/team/team.service";
import { GetTeamUseCase } from "./get-team.usecase";
import { ITeamDomainModel } from "src/app/domain/interfaces/team/team.interface.domain";

describe('GetTeamUseCase', () => {
    let useCase: GetTeamUseCase;
    let service: TeamService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          GetTeamUseCase,
          {
            provide: TeamService,
            useValue: jasmine.createSpyObj('TeamService', ['getTeam'])
          }
        ]
      });
  
      useCase = TestBed.inject(GetTeamUseCase);
      service = TestBed.inject(TeamService);
    });
  
    it('should call getTeam function of the service and return an Observable with ITeamDomainModel', () => {
      const data = '1231231231231';
      const entity: ITeamDomainModel = {
        name: "string",
        member: ["string"],
        task: ["string"],
        project: "string",
        collaboration: ["string"],
      };
      (service.getTeam as jasmine.Spy).and.returnValue(of(entity));
  
      useCase.execute(data).subscribe(result => {
        expect(result).toEqual(entity);
        expect(service.getTeam).toHaveBeenCalledWith(data);
      });
    });
  });