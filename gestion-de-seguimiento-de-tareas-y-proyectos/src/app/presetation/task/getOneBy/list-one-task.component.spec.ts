 import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
 import { ActivatedRoute, Params, Router } from '@angular/router';
 import { Observable, of } from 'rxjs';
 import { ListOneTaskComponent } from './list-one-task.component';
 import { TaskService } from 'src/app/domain/services/task/task.service';
 import { ITaskDomainModel } from 'src/app/domain/interfaces/task/task.entity.domain';
 import { useCaseProviders } from 'src/app/data/factory';
import { GetTaskUseCase } from 'src/app/application/usecases/task/get-task.usecase';
import { DeleteTaskUseCase } from 'src/app/application/usecases/task/delete-task.usecase';

describe('ListOneTaskComponent', () => {
  let component: ListOneTaskComponent;
  let fixture: ComponentFixture<ListOneTaskComponent>;
  let taskService: TaskService;
  let router: Router;
  let activatedRoute: ActivatedRoute;
  let getTaskUseCase: GetTaskUseCase;
  let deleteTaskUseCase: DeleteTaskUseCase;
  const taskModel : ITaskDomainModel = {
    name: 'string',
    dataExpiration: 'string',
    description: 'string',
    progress : 'string',
    priority: 'string',
  };
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListOneTaskComponent],
      providers: [
        {
          provide: TaskService,
          useValue: {
            deleteTask: () => of(null),
          },
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' }),
          },
        },
        useCaseProviders.getTaskUseCaseProvider,
        {
          provide: Router,
          useValue: {
            navigate: () => {},
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOneTaskComponent);
    component = fixture.componentInstance;
    taskService = TestBed.inject(TaskService);
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(ActivatedRoute);


    getTaskUseCase = TestBed.inject(GetTaskUseCase);
    spyOn(getTaskUseCase, 'execute').and.returnValue(of(taskModel));
    deleteTaskUseCase = TestBed.inject(DeleteTaskUseCase);
    spyOn(deleteTaskUseCase, 'execute').and.returnValue(of(true));
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call deleteTaskUseCase and navigate to task register component on delete method', () => {
    const spy = spyOn(deleteTaskUseCase, 'execute').and.callThrough();
    spyOn(window, 'confirm').and.returnValue(true);
    const navigateSpy = spyOn(router, 'navigate');
    component.taskId = '1';
    component.delete();
    expect(spy).toHaveBeenCalled();
    expect(navigateSpy).toHaveBeenCalled();
  });

  it('should call getTaskUseCase with task id and assign the result to task variable', () => {
    
    component.ngOnInit();
    expect(getTaskUseCase.execute).toHaveBeenCalled();
    expect(component.task).toEqual(taskModel);
  });
  it('should call getTaskUseCase with task id and assign the result to task variable', () => {
    
    component.ngOnInit();
    expect(deleteTaskUseCase.execute).toHaveBeenCalled();
    expect(component.task).toEqual(taskModel);
  });

  it('should navigate to update component on update method', () => {
    const spy = spyOn(router, 'navigate');
    component.taskId = '1';
    component.update();
    expect(spy).toHaveBeenCalled();
  });

  
  it('should not call deleteTaskUseCase and not navigate on delete method if user cancels', () => {
    const spy = spyOn(taskService, 'deleteTask').and.callThrough();
    spyOn(window, 'confirm').and.returnValue(false);
    const navigateSpy = spyOn(router, 'navigate');
    component.taskId = '1';
    component.delete();
    expect(spy).not.toHaveBeenCalled();
    expect(navigateSpy).not.toHaveBeenCalled();
  });
});