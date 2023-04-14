import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { UpdateProjectUseCase } from "./update-project.usecase";
import { ProjectService } from "src/app/domain/services/proyect/proyect.service";
import { IUpdateProjectModel } from "src/app/domain/interfaces/proyect/update-proyect.interface.domain";
import { IProjectDomainModel } from "src/app/domain/interfaces/proyect/proyect.interface.domain";

describe('UpdateProjectUseCase', () => {
    let useCase: UpdateProjectUseCase;
    let service: ProjectService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          UpdateProjectUseCase,
          {
            provide: ProjectService,
            useValue: jasmine.createSpyObj('ProjectService', ['updateProject'])
          }
        ]
      });
  
      useCase = TestBed.inject(UpdateProjectUseCase);
      service = TestBed.inject(ProjectService);
    });
  
    it('should call updateProject function of the service and return an Observable with IupdateProjectMemberDomainModel', () => {
     
        const entity: IProjectDomainModel = {
            name: "string",
            dataExpiration: "string",
            progress : "string",
            priority: "string", 
        };
      const update : IUpdateProjectModel = {
            _id: "string",
            name: "string",
            dataExpiration: "string",
            progress : "string",
            priority: "string",
      };

      (service.updateProject as jasmine.Spy).and.returnValue(of(entity));
  
      useCase.execute(update).subscribe(result => {
        expect(result).toEqual(entity);
        expect(service.updateProject).toHaveBeenCalledWith(update);
      });
    });
  });