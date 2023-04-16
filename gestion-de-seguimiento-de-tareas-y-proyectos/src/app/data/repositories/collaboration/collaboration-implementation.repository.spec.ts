import { TestBed } from "@angular/core/testing";
import { CollaborationImplementationRepository } from "./collaboration-implementation.repository";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ICollaborationDomainModel } from "src/app/domain/interfaces/collaboration/collaboration.interface.domain";
import { IUpdateCollaborationModel } from "src/app/domain/interfaces/collaboration/update-collaboration.interface.domain";
describe('CollaborationImplementationRepository', () => {
    let repository: CollaborationImplementationRepository;
    let httpTestingController: HttpTestingController;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [CollaborationImplementationRepository]
      });
      repository = TestBed.inject(CollaborationImplementationRepository);
      httpTestingController = TestBed.inject(HttpTestingController);
    });
  
    afterEach(() => {
      httpTestingController.verify();
    });
  
    it('should create an instance', () => {
      expect(repository).toBeTruthy();
    });
  
    it('should register a collaboration', () => {
      const collaboration: ICollaborationDomainModel = {
        comment: "string",
        notification: "string",
        progress: "string",
        performence: "string",
      };
      repository.register(collaboration).subscribe(response => {
        expect(response).toEqual(collaboration);
      });
      const req = httpTestingController.expectOne(`${repository.URL}/collaboration/create`);
      expect(req.request.method).toEqual('POST');
      req.flush(collaboration);
    });

    it('should delete a collaboration', () => {
      const collaborationId = 'collaboration-id';
      repository.deleteCollaboration(collaborationId).subscribe(response => {
        expect(response).toBeTrue();
      });
      const req = httpTestingController.expectOne(`${repository.URL}/collaboration/delete/${collaborationId}`);
      expect(req.request.method).toEqual('DELETE');
      req.flush(true);
    })

    it('should get a collaboration', () => {
      const collaborationId = 'collaboration-id';
      const collaboration: ICollaborationDomainModel = {
        comment: "string",
        notification: "string",
        progress: "string",
        performence: "string",
      };
      repository.getCollaboration(collaborationId).subscribe(response => {
        expect(response).toEqual(collaboration);
      });
      const req = httpTestingController.expectOne(`${repository.URL}/collaboration/get/${collaborationId}`);
      expect(req.request.method).toEqual('GET');
      req.flush(collaboration);
    });
  
    it('should update a collaboration', () => {
      const collaboration: IUpdateCollaborationModel = {
        _id: "123",
        comment: "string",
        notification: "string",
        progress: "string",
        performence: "string",
      };
      const updatedCollaboration: ICollaborationDomainModel = {
        comment: "string",
        notification: "string",
        progress: "string",
        performence: "string",
      };
      repository.updateCollaboration(collaboration).subscribe(response => {
        expect(response).toEqual(updatedCollaboration);
      });
      const req = httpTestingController.expectOne(`${repository.URL}/collaboration/update/${collaboration._id}`);
      expect(req.request.method).toEqual('PUT');
      req.flush(updatedCollaboration);
    });
});