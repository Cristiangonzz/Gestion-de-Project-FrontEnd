import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { RegisterCollaborationUseCase } from "./register-collaboration.usecase";
import { CollaborationService } from "src/app/domain/services/collaboration/collaboration.service";
import { ICollaborationDomainModel } from "src/app/domain/interfaces/collaboration/collaboration.interface.domain";

describe('RegisterCollaborationUseCase', () => {
    let useCase: RegisterCollaborationUseCase;
    let service: CollaborationService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          RegisterCollaborationUseCase,
          {
            provide: CollaborationService,
            useValue: jasmine.createSpyObj('CollaborationService', ['register'])
          }
        ]
      });
  
      useCase = TestBed.inject(RegisterCollaborationUseCase);
      service = TestBed.inject(CollaborationService);
    });
  
    it('should call register function of the service and return an Observable with IRegisterMemberDomainModel', () => {
     
        const entity: ICollaborationDomainModel = {
            comment: "string" ,
            notification: "string" ,
            progress: "string" ,
            performence: "string" ,
        };
      

      (service.register as jasmine.Spy).and.returnValue(of(entity));
  
      useCase.execute(entity).subscribe(result => {
        expect(result).toEqual(entity);
        expect(service.register).toHaveBeenCalledWith(entity);
      });
    });
  });