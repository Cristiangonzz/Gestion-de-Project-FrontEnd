import { TeamService } from "src/app/domain/services/team/team.service";
import { RegisterTeamUseCase } from "./register-team.usecase";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { ITeamDomainModel } from "src/app/domain/interfaces/team/team.interface.domain";

describe('RegisterTeamUseCase', () => {
    let useCase: RegisterTeamUseCase;
    let service: TeamService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          RegisterTeamUseCase,
          {
            provide: TeamService,
            useValue: jasmine.createSpyObj('TeamService', ['register'])
          }
        ]
      });
  
      useCase = TestBed.inject(RegisterTeamUseCase);
      service = TestBed.inject(TeamService);
    });
  
    it('should call register function of the service and return an Observable with ITeamDomainModel', () => {
      const team: ITeamDomainModel = {
        name: 'Team Name',
        member: ['member-id-1', 'member-id-2'],
        task: ['task-id-1', 'task-id-2'],
        project: 'project-id',
        collaboration: ['collaboration-id-1', 'collaboration-id-2']
      };
      (service.register as jasmine.Spy).and.returnValue(of(team));
  
      useCase.execute(team).subscribe(result => {
        expect(result).toEqual(team);
        expect(service.register).toHaveBeenCalledWith(team);
      });
    });
  });