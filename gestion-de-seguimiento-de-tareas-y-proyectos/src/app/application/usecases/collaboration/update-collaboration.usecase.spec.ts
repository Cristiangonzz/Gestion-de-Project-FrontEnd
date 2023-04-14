import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { CollaborationService } from "src/app/domain/services/collaboration/collaboration.service";
import { UpdateCollaborationUseCase } from "./update-collaboration.usecase";
import { IUpdateCollaborationModel } from "src/app/domain/interfaces/collaboration/update-collaboration.interface.domain";
import { ICollaborationDomainModel } from "src/app/domain/interfaces/collaboration/collaboration.interface.domain";

describe('UpdateCollaborationUseCase', () => {
    let useCase: UpdateCollaborationUseCase;
    let service: CollaborationService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          UpdateCollaborationUseCase,
          {
            provide: CollaborationService,
            useValue: jasmine.createSpyObj('CollaborationService', ['updateCollaboration'])
          }
        ]
      });
  
      useCase = TestBed.inject(UpdateCollaborationUseCase);
      service = TestBed.inject(CollaborationService);
    });
  
    it('should call updateCollaboration function of the service and return an Observable with IupdateCollaborationMemberDomainModel', () => {
     
        const entity: ICollaborationDomainModel = {
            comment: "string" ,
            notification: "string" ,
            progress: "string" ,
            performence: "string" ,
        };
      const update : IUpdateCollaborationModel = {
            _id: "123123",
            comment: "string" ,
            notification: "string" ,
            progress: "string" ,
            performence: "string" ,
      };

      (service.updateCollaboration as jasmine.Spy).and.returnValue(of(entity));
  
      useCase.execute(update).subscribe(result => {
        expect(result).toEqual(entity);
        expect(service.updateCollaboration).toHaveBeenCalledWith(update);
      });
    });
  });