import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { GetProjectUseCase } from "./get-project.usecase";
import { ProjectService } from "src/app/domain/services/proyect/proyect.service";
import { IProjectDomainModel } from "src/app/domain/interfaces/proyect/proyect.interface.domain";

describe('GetProjectUseCase', () => {
    let useCase: GetProjectUseCase;
    let service: ProjectService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          GetProjectUseCase,
          {
            provide: ProjectService,
            useValue: jasmine.createSpyObj('ProjectService', ['getProject'])
          }
        ]
      });
  
      useCase = TestBed.inject(GetProjectUseCase);
      service = TestBed.inject(ProjectService);
    });
  
    it('should call getProject function of the service and return an Observable with IProjectDomainModel', () => {
      const data = '1231231231231';
      const member: IProjectDomainModel = {
        name: "string",
        dataExpiration: "string",
        progress : "string",
        priority: "string" ,
      };
      (service.getProject as jasmine.Spy).and.returnValue(of(member));
  
      useCase.execute(data).subscribe(result => {
        expect(result).toEqual(member);
        expect(service.getProject).toHaveBeenCalledWith(data);
      });
    });
  });