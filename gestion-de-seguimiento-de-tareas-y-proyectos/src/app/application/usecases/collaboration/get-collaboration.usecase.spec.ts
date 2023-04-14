import { CollaborationService } from "src/app/domain/services/collaboration/collaboration.service";
import { GetCollaborationUseCase } from "./get-collaboration.usecase";
import { ICollaborationDomainModel } from "src/app/domain/interfaces/collaboration/collaboration.interface.domain";
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";

describe('GetCollaborationUseCase', () => {
    let useCase: GetCollaborationUseCase;
    let collaborationService: CollaborationService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          GetCollaborationUseCase,
          {
            provide: CollaborationService,
            useValue: jasmine.createSpyObj('CollaborationService', ['getCollaboration'])
          }
        ]
      });
  
      useCase = TestBed.inject(GetCollaborationUseCase);
      collaborationService = TestBed.inject(CollaborationService);
    });
  
    it('should call getCollaboration function of the service and return an Observable with ICollaborationDomainModel', () => {
      const data = 'collaboration-id';
      const collaboration: ICollaborationDomainModel = {
        comment: "string",
        notification: "string",
        progress: "string",
        performence: "string",
      };
      (collaborationService.getCollaboration as jasmine.Spy).and.returnValue(of(collaboration));
  
      useCase.execute(data).subscribe(result => {
        expect(result).toEqual(collaboration);
        expect(collaborationService.getCollaboration).toHaveBeenCalledWith(data);
      });
    });
  });