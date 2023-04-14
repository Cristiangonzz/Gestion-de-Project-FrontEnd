 import { CollaborationService } from "src/app/domain/services/collaboration/collaboration.service";
 import { DeleteCollaborationUseCase } from "./delete-collaboration.usecase";
 import { of } from "rxjs";



 describe('DeleteCollaborationUseCase', () => {
     let useCase: DeleteCollaborationUseCase;
     let collaborationService: CollaborationService;
  
     beforeEach(() => {
       collaborationService = jasmine.createSpyObj('collaborationService', ['deleteCollaboration']);
       useCase = new DeleteCollaborationUseCase(collaborationService);
     });
  
     it('should call deleteCollaboration function of the repository and return an Observable with boolean value', () => {
       const id = '6438958fd38ba6d1049fd6b4';
       const success = true;
       (collaborationService.deleteCollaboration as jasmine.Spy).and.returnValue(of(success));
  
       useCase.execute(id).subscribe(result => {
         expect(result).toBe(success);
         expect(collaborationService.deleteCollaboration).toHaveBeenCalledWith(id);
       });
     });
   }); 
