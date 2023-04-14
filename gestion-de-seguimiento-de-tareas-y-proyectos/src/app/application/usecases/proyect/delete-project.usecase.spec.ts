import { DeleteProjectUseCase } from "./delete-project.usecase";
import { ProjectService } from "src/app/domain/services/proyect/proyect.service";

import { of } from "rxjs";
describe('DeleteProjectUseCase', () => {
    let useCase: DeleteProjectUseCase;
    let service: ProjectService;
 
    beforeEach(() => {
      service = jasmine.createSpyObj('ProjectService', ['deleteProject']);
      useCase = new DeleteProjectUseCase(service);
    });
 
    it('should call deleteProject function of the repository and return an Observable with boolean value', () => {
      const id = '6438958fd38ba6d1049fd6b4';
      const success = true;
      (service.deleteProject as jasmine.Spy).and.returnValue(of(success));
 
      useCase.execute(id).subscribe(result => {
        expect(result).toBe(success);
        expect(service.deleteProject).toHaveBeenCalledWith(id);
      });
    });
  }); 