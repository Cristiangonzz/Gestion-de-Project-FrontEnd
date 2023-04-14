import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { RegisterTaskUseCase } from "./register-task.usecase";
import { TaskService } from "src/app/domain/services/task/task.service";
import { ITaskDomainModel } from "src/app/domain/interfaces/task/task.entity.domain";

describe('RegisterTaskUseCase', () => {
    let useCase: RegisterTaskUseCase;
    let service: TaskService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          RegisterTaskUseCase,
          {
            provide: TaskService,
            useValue: jasmine.createSpyObj('TaskService', ['register'])
          }
        ]
      });
  
      useCase = TestBed.inject(RegisterTaskUseCase);
      service = TestBed.inject(TaskService);
    });
  
    it('should call register function of the service and return an Observable with ITaskDomainModel', () => {
      const entity: ITaskDomainModel = {
        name: "string" ,
        dataExpiration: "string" ,
        description: "string" ,
        progress : "string" ,
        priority: "string" , 
      };

      (service.register as jasmine.Spy).and.returnValue(of(entity));
  
      useCase.execute(entity).subscribe(result => {
        expect(result).toEqual(entity);
        expect(service.register).toHaveBeenCalledWith(entity);
      });
    });
  });