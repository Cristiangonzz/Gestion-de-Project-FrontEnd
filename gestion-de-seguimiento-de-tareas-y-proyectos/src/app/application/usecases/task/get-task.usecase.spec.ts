import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { GetTaskUseCase } from "./get-task.usecase";
import { TaskService } from "src/app/domain/services/task/task.service";
import { ITaskDomainModel } from "src/app/domain/interfaces/task/task.entity.domain";

describe('GetTaskUseCase', () => {
    let useCase: GetTaskUseCase;
    let service: TaskService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          GetTaskUseCase,
          {
            provide: TaskService,
            useValue: jasmine.createSpyObj('TaskService', ['getTask'])
          }
        ]
      });
  
      useCase = TestBed.inject(GetTaskUseCase);
      service = TestBed.inject(TaskService);
    });
  
    it('should call getTask function of the service and return an Observable with IProjectDomainModel', () => {
      const data = '1231231231231';
      const entity: ITaskDomainModel = {
        name: "string",
        description: "string",
        dataExpiration: "string",
        progress : "string",
        priority: "string" ,
      };
      (service.getTask as jasmine.Spy).and.returnValue(of(entity));
  
      useCase.execute(data).subscribe(result => {
        expect(result).toEqual(entity);
        expect(service.getTask).toHaveBeenCalledWith(data);
      });
    });
  });