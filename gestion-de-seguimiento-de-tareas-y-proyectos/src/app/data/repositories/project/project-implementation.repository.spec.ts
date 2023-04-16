

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
import { ProjectImplementationRepository } from './project-implementation.repository';
import { IProjectDomainModel } from 'src/app/domain/interfaces/proyect/proyect.interface.domain';
import { IUpdateProjectModel } from 'src/app/domain/interfaces/proyect/update-proyect.interface.domain';

describe('ProjectImplementationRepository', () => {
    let repository: ProjectImplementationRepository;
    let httpTestingController: HttpTestingController;
    const project: IProjectDomainModel = {
        name: "string",
        dataExpiration: "string",
        progress : "string",
        priority: "string" ,
      };

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ProjectImplementationRepository]
      });
      repository = TestBed.inject(ProjectImplementationRepository);
      httpTestingController = TestBed.inject(HttpTestingController);
    });
  
    afterEach(() => {
      httpTestingController.verify();
    });
  
    it('should create an instance', () => {
      expect(repository).toBeTruthy();
    });
  
    it('should register a collaboration', () => {
      
      repository.register(project).subscribe(response => {
        expect(response).toEqual(project);
      });
      const req = httpTestingController.expectOne(`${repository.URL}/project/create`);
      expect(req.request.method).toEqual('POST');
      req.flush(project);
    });

    it('should delete a project', () => {
      const projectId = '123123';
      repository.deleteProject(projectId).subscribe(response => {
        expect(response).toBeTrue();
      });
      const req = httpTestingController.expectOne(`${repository.URL}/project/delete/${projectId}`);
      expect(req.request.method).toEqual('DELETE');
      req.flush(true);
    })

    it('should get a project', () => {
      const projectId = '123123';

      repository.getProject(projectId).subscribe(response => {
        expect(response).toEqual(project);
      });
      const req = httpTestingController.expectOne(`${repository.URL}/project/get/${projectId}`);
      expect(req.request.method).toEqual('GET');
      req.flush(project);
    });
  
    it('should update a project', () => {
      const updateProject : IUpdateProjectModel = {
        _id: "123",
        name: "string",
        dataExpiration: "string",
        progress : "string",
        priority: "string" ,
      }
      repository.updateProject(updateProject).subscribe(response => {
        expect(response).toEqual(project);
      });
      const req = httpTestingController.expectOne(`${repository.URL}/project/update/${updateProject._id}`);
      expect(req.request.method).toEqual('PUT');
      req.flush(project);
    });
});