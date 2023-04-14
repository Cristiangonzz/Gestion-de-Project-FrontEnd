import { DeleteTeamUseCase } from "./delete-team.usecase";
import { TeamService } from "src/app/domain/services/team/team.service";

import { of } from "rxjs";


describe('DeleteTeamUseCase', () => {
    let useCase: DeleteTeamUseCase;
    let Service: TeamService;
 
    beforeEach(() => {
    Service = jasmine.createSpyObj('TeamService', ['deleteTeam']);
      useCase = new DeleteTeamUseCase(Service);
    });
 
    it('should call deleteTeam function of the repository and return an Observable with boolean value', () => {
      const id = '6438958fd38ba6d1049fd6b4';
      const success = true;
      (Service.deleteTeam as jasmine.Spy).and.returnValue(of(success));
 
      useCase.execute(id).subscribe(result => {
        expect(result).toBe(success);
        expect(Service.deleteTeam).toHaveBeenCalledWith(id);
      });
    });
  }); 
