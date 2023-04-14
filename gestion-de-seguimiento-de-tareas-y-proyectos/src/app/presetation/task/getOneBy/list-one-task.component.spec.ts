// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
// import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
// import { of } from 'rxjs';
// import { ListOneTaskComponent } from './list-one-task.component';
// import { TaskService } from 'src/app/domain/services/task/task.service';
// import { useCaseProviders } from 'src/app/data/factory';
// import { ITaskDomainModel } from 'src/app/domain/interfaces/task/task.entity.domain';

// describe('ListOneTaskComponent', () => {
//   let component: ListOneTaskComponent;
//   let fixture: ComponentFixture<ListOneTaskComponent>;
//   let router: Router;
//   let route: ActivatedRoute;
//   let taskService: TaskService;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ListOneTaskComponent],
//       imports: [RouterTestingModule],
//       providers: [
//         {
//           provide: ActivatedRoute,
//           useValue: {
//             snapshot: { paramMap: convertToParamMap({ id: '1' }) },
//           },
//         },
//         useCaseProviders,
//       ],
//     }).compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(ListOneTaskComponent);
//     component = fixture.componentInstance;
//     taskService = TestBed.inject(TaskService);
//     router = TestBed.inject(Router);
//     route = TestBed.inject(ActivatedRoute);
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   it('should set taskId when paramstaskId is called', () => {
//     spyOn(route.snapshot.paramMap, 'get').and.returnValue('1');

//     component.paramstaskId();

//     expect(component.taskId).toEqual('1');
//   });

//   it('should call getOnetask with taskId when ngOnInit is called', () => {
//     spyOn(component, 'paramstaskId');
//     spyOn(component, 'getOnetask');

//     component.ngOnInit();

//     expect(component.paramstaskId).toHaveBeenCalled();
//     expect(component.getOnetask).toHaveBeenCalledWith('1');
//   });

//   it('should set task when getOnetask is called', () => {
//     const task: ITaskDomainModel = { 
//         name: "string",
//         dataExpiration: "string",
//         description: "string",
//         progress : "string",
//         priority: "string",
//      };
//     spyOn(taskService.getTaskUseCase, 'execute').and.returnValue(of(task));

//     component.getOnetask('1');

//     expect(component.task).toEqual(task);
//   });

//   it('should navigate to task update page when update is called', () => {
//     spyOn(router, 'navigate');

//     component.taskId = '1';
//     component.update();

//     expect(router.navigate).toHaveBeenCalledWith(['task/update/1']);
//   });

//   it('should call SweetAlert and navigate to task list when delete is called', () => {
//     spyOn(window, 'confirm').and.returnValue(true);
//     spyOn(taskService.deleteTaskUseCase, 'execute').and.returnValue(of(true));
//     spyOn(router, 'navigate');
//     spyOn(window, 'Swal');

//     component.taskId = '1';
//     component.delete();

//     expect(window.confirm).toHaveBeenCalled();
//     expect(taskService.deleteTaskUseCase.execute).toHaveBeenCalledWith('1');
//     expect(router.navigate).toHaveBeenCalledWith(['task/list']);
//     expect(window.Swal).toHaveBeenCalledWith({
//       title: 'Deleted!',
//       text: 'Your task has been deleted.',
//       icon: 'success',
//       timer: 2000,
//     });
//   });
// });