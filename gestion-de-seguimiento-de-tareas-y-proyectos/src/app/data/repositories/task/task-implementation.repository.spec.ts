import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from "@angular/core/testing";
import { TaskImplementationRepository } from './task-implementation.repository';
import { ITaskDomainModel } from 'src/app/domain/interfaces/task/task.entity.domain';
import { IUpdateTaskModel } from 'src/app/domain/interfaces/task/update-task.interface.domain';

describe('TaskImplementationRepository', () => {
    let repository: TaskImplementationRepository;
    let httpTestingController: HttpTestingController;
    const task: ITaskDomainModel = {
        name: "string",
        dataExpiration: "string",
        description: "string",
        progress : "string",
        priority: "string",
      };
    const updatetask: IUpdateTaskModel = {
        _id:"123123",
        name: "string",
        dataExpiration: "string",
        description: "string",
        progress : "string",
        priority: "string",
    };
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [TaskImplementationRepository]
      });
      repository = TestBed.inject(TaskImplementationRepository);
      httpTestingController = TestBed.inject(HttpTestingController);
    });
  
    afterEach(() => {
      httpTestingController.verify();
    });
  
    it('should create an instance', () => {
      expect(repository).toBeTruthy();
    });
  
    it('should register a collaboration', () => {
      
      repository.register(task).subscribe(response => {
        expect(response).toEqual(task);
      });
      const req = httpTestingController.expectOne(`${repository.URL}/task/create`);
      expect(req.request.method).toEqual('POST');
      req.flush(task);
    });

    it('should delete a task', () => {
      const taskId = '123123';
      repository.deleteTask(taskId).subscribe(response => {
        expect(response).toBeTrue();
      });
      const req = httpTestingController.expectOne(`${repository.URL}/task/delete/${taskId}`);
      expect(req.request.method).toEqual('DELETE');
      req.flush(true);
    })

    it('should get a task', () => {
      const taskId = '123123';

      repository.getTask(taskId).subscribe(response => {
        expect(response).toEqual(task);
      });
      const req = httpTestingController.expectOne(`${repository.URL}/task/get/${taskId}`);
      expect(req.request.method).toEqual('GET');
      req.flush(task);
    });
  
    it('should update a task', () => {
      
      repository.updateTask(updatetask).subscribe(response => {
        expect(response).toEqual(task);
      });
      const req = httpTestingController.expectOne(`${repository.URL}/task/update/${updatetask._id}`);
      expect(req.request.method).toEqual('PUT');
      req.flush(task);
    });
});