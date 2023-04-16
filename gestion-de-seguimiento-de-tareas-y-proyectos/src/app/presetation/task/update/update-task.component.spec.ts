 import { ComponentFixture, TestBed } from '@angular/core/testing';

 import { UpdateTaskComponent } from './update-task.component';
import { TaskService } from 'src/app/domain/services/task/task.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { DataModule } from 'src/app/data/data.module';
import { UpdateTaskUseCase } from 'src/app/application/usecases/task/update-task.usecase';
import { ActivatedRoute, Router } from '@angular/router';
import { IUpdateTaskModel } from 'src/app/domain/interfaces/task/update-task.interface.domain';
import { ITaskDomainModel } from 'src/app/domain/interfaces/task/task.entity.domain';
import { of } from 'rxjs';
import Swal from 'sweetalert2';


describe('UpdateTaskComponent', () => {
    let component: UpdateTaskComponent;
    let fixture: ComponentFixture<UpdateTaskComponent>;
    let useCase: jasmine.SpyObj<UpdateTaskUseCase>;
    let router: Router;
    let routerActivated: ActivatedRoute;
    
    const entityUpdate : IUpdateTaskModel = {
        _id:"123",
        name: "string",
        description: "string" ,
        dataExpiration: "string",
        progress : "string",
        priority: "string" ,   
    };
    const entityModel : ITaskDomainModel = {
        
        name: "string",
        description: "string" ,
        dataExpiration: "string",
        progress : "string",
        priority: "string" ,   
    };
    beforeEach(async () => {
      
        useCase = jasmine.createSpyObj('UpdateTaskUseCase', ['execute']);
      
      await TestBed.configureTestingModule({
        declarations: [ UpdateTaskComponent],
        imports: [ FormsModule, ReactiveFormsModule ,SharedModule ,DataModule],
        providers: [
            { provide: UpdateTaskUseCase, useValue: useCase },
            {
                provide: TaskService,
                useValue: {
                    updateTask: () => of(entityModel),
                },
                },
          {
            provide: Router,
            useValue: {
              navigate: () => {},
            },
          },
          {
            provide: ActivatedRoute,
            useValue: {
              params: of({ id: '1' }),
            },
          },

        ]
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(UpdateTaskComponent);
      component = fixture.componentInstance;
      router = TestBed.inject(Router);
      routerActivated = TestBed.inject(ActivatedRoute);
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
    describe('send()', () => {
      it('should call register method of ProjectService with form value and redirect to sign-in page on success', () => {
      
        useCase.execute.and.returnValue(of(entityModel));
       
      const swalSpy = spyOn(Swal, 'fire');
        const routerSpy = spyOn(router, 'navigate');
  
        component.FormUpdate.setValue(entityModel);
        component.send();
  
        expect(useCase.execute).toHaveBeenCalled();
        expect(routerSpy).toHaveBeenCalled();
        expect(swalSpy).toHaveBeenCalledWith();

        });
  
      it('should log error on failure', () => {
        const error = new Error('test error');
        useCase.execute.and.returnValue(of(entityModel));
        const consoleSpy = spyOn(console, 'log');
  
        component.FormUpdate.setValue(entityModel);
        component.send();
  
        expect(consoleSpy).toHaveBeenCalled();
      });
    });
  });
