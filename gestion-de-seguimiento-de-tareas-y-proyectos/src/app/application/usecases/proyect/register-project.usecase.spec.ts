import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { RegisterProjectUseCase } from "./register-project.usecase";
import { ProjectService } from "src/app/domain/services/proyect/proyect.service";
import { IProjectDomainModel } from "src/app/domain/interfaces/proyect/proyect.interface.domain";

describe('RegisterProjectUseCase', () => {
    let useCase: RegisterProjectUseCase;
    let service: ProjectService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          RegisterProjectUseCase,
          {
            provide: ProjectService,
            useValue: jasmine.createSpyObj('ProjectService', ['register'])
          }
        ]
      });
  
      useCase = TestBed.inject(RegisterProjectUseCase);
      service = TestBed.inject(ProjectService);
    });
  
    it('should call register function of the service and return an Observable with IProjectDomainModel', () => {
      const entity: IProjectDomainModel = {
        name: "string",
        dataExpiration: "string",
        progress : "string",
        priority: "string",  
      };

      (service.register as jasmine.Spy).and.returnValue(of(entity));
  
      useCase.execute(entity).subscribe(result => {
        expect(result).toEqual(entity);
        expect(service.register).toHaveBeenCalledWith(entity);
      });
    });
  });