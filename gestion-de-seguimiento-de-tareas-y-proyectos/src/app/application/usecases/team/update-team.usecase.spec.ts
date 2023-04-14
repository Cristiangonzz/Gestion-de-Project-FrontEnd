import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { UpdateTeamUseCase } from "./update-team.usecase";
import { TeamService } from "src/app/domain/services/team/team.service";
import { ITeamDomainModel } from "src/app/domain/interfaces/team/team.interface.domain";
import { IUpdateTeamModel } from "src/app/domain/interfaces/team/update-team.interface.domain";

describe('UpdateTeamUseCase', () => {
    let useCase: UpdateTeamUseCase;
    let service: TeamService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          UpdateTeamUseCase,
          {
            provide: TeamService,
            useValue: jasmine.createSpyObj('TeamService', ['updateTeam'])
          }
        ]
      });
  
      useCase = TestBed.inject(UpdateTeamUseCase);
      service = TestBed.inject(TeamService);
    });
  
    it('should call updateTeam function of the service and return an Observable with IupdateTeamMemberDomainModel', () => {
     
        const entity: ITeamDomainModel = {
            name: "string",
            member: [""],
            task: [""],
            project: "project",
            collaboration: [""],
        };
      const update : IUpdateTeamModel = {
            _id: "123123123",
            name: "string",
            proyect: "project",
          
      };

      (service.updateTeam as jasmine.Spy).and.returnValue(of(entity));
  
      useCase.execute(update).subscribe(result => {
        expect(result).toEqual(entity);
        expect(service.updateTeam).toHaveBeenCalledWith(update);
      });
    });
  });