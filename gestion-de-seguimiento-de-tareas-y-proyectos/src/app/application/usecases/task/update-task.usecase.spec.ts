import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { UpdateTaskUseCase } from "./update-task.usecase";
import { TaskService } from "src/app/domain/services/task/task.service";
import { ITaskDomainModel } from "src/app/domain/interfaces/task/task.entity.domain";
import { IUpdateTaskModel } from "src/app/domain/interfaces/task/update-task.interface.domain";

describe('UpdateTaskUseCase', () => {
    let useCase: UpdateTaskUseCase;
    let service: TaskService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          UpdateTaskUseCase,
          {
            provide: TaskService,
            useValue: jasmine.createSpyObj('TaskService', ['updateTask'])
          }
        ]
      });
  
      useCase = TestBed.inject(UpdateTaskUseCase);
      service = TestBed.inject(TaskService);
    });
  
    it('should call updateTask function of the service and return an Observable with IupdateTaskMemberDomainModel', () => {
     
        const entity: ITaskDomainModel = {
            name: "string",
            dataExpiration: "string",
            description: "string",
            progress : "string",
            priority: "string", 
        };
      const update : IUpdateTaskModel = {
            _id: "123123123",
            name: "string",
            dataExpiration: "string",
            description: "string",
            progress : "string",
            priority: "string", 
      };

      (service.updateTask as jasmine.Spy).and.returnValue(of(entity));
  
      useCase.execute(update).subscribe(result => {
        expect(result).toEqual(entity);
        expect(service.updateTask).toHaveBeenCalledWith(update);
      });
    });
  });