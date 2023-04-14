import { of } from "rxjs";
import { DeleteTaskUseCase } from "./delete-task.usecase";
import { TaskService } from "src/app/domain/services/task/task.service";


describe('DeleteTaskUseCase', () => {
    
    let useCase: DeleteTaskUseCase;
    let Service: TaskService;
 
    beforeEach(() => {
    Service = jasmine.createSpyObj('TaskService', ['deleteTask']);
      useCase = new DeleteTaskUseCase(Service);
    });
 
    it('should call deleteTask function of the repository and return an Observable with boolean value', () => {
      const id = '6438958fd38ba6d1049fd6b4';
      const success = true;
      (Service.deleteTask as jasmine.Spy).and.returnValue(of(success));
 
      useCase.execute(id).subscribe(result => {
        expect(result).toBe(success);
        expect(Service.deleteTask).toHaveBeenCalledWith(id);
      });
    });
  }); 
