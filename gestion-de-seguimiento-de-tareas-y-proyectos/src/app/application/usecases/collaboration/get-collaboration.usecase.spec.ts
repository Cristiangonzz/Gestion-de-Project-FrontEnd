import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { GetCollaborationUseCase } from './get-collaboration.usecase';
import { CollaborationImplementationRepository } from 'src/app/data/repositories/collaboration/collaboration-implementation.repository';
import { ICollaborationDomainModel } from 'src/app/domain/interfaces/collaboration/collaboration.interface.domain';

describe('GetCollaborationUseCase', () => {
  let useCase: GetCollaborationUseCase;
  let collaborationServiceSpy: jasmine.SpyObj<CollaborationImplementationRepository>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('CollaborationImplementationRepository', ['getCollaboration']);

    TestBed.configureTestingModule({
      providers: [
        GetCollaborationUseCase,
        { provide: CollaborationImplementationRepository, useValue: spy }
      ]
    });

    useCase = TestBed.inject(GetCollaborationUseCase);
    collaborationServiceSpy = TestBed.inject(CollaborationImplementationRepository) as jasmine.SpyObj<CollaborationImplementationRepository>;
  });

  it('should be created', () => {
    expect(useCase).toBeTruthy();
  });

  it('should return a collaboration', () => {
    const expectedCollaboration: ICollaborationDomainModel = {
        comment: "null",
        notification: "null",
        progress: "null",
        performence: "null"
    };
    collaborationServiceSpy.getCollaboration.and.returnValue(of(expectedCollaboration));

    useCase.execute('collaboration-id').subscribe(collaboration => {
      expect(collaboration).toEqual(expectedCollaboration);
    });
  });
});
