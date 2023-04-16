import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GetOneProjectComponent } from "./get-one-project.component";
import { ProjectService } from "src/app/domain/services/proyect/proyect.service";
import { ActivatedRoute, Router } from "@angular/router";
import { GetProjectUseCase } from "src/app/application/usecases/proyect/get-project.usecase";
import { DeleteProjectUseCase } from "src/app/application/usecases/proyect/delete-project.usecase";
import { IProjectDomainModel } from "src/app/domain/interfaces/proyect/proyect.interface.domain";
import { ReactiveFormsModule } from "@angular/forms";
import { of } from "rxjs";
import { useCaseProviders } from "src/app/data/factory";
import { DataModule } from "src/app/data/data.module";
import Swal from "sweetalert2";

describe('GetOneProjectComponent', () => {
    let component: GetOneProjectComponent;
    let fixture: ComponentFixture<GetOneProjectComponent>;
    let service: ProjectService;
    let router: Router;
    let activatedRoute: ActivatedRoute;
    let useCase: GetProjectUseCase;
    let useCaseDelete: DeleteProjectUseCase;
   
    const entity : IProjectDomainModel = {
        
        name: "string",
        dataExpiration: "string",
        progress : "string",
        priority: "string",    
    };
   
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [GetOneProjectComponent],
        imports: [ReactiveFormsModule,DataModule],
        providers: [
          //  {
          //    provide: ProjectService,
          //    useValue: {
          //      deleteProject: () => of(null),
            
          //    },
          //  },
          {
            provide: ActivatedRoute,
            useValue: {
              params: of({ id: '1' }),
            },
          },
          useCaseProviders.getProjectUseCaseProvider,
          useCaseProviders.deleteProjectUseCaseProvider,
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
      fixture = TestBed.createComponent(GetOneProjectComponent);
      component = fixture.componentInstance;
      service = TestBed.inject(ProjectService);
      router = TestBed.inject(Router);
      activatedRoute = TestBed.inject(ActivatedRoute);
      useCaseDelete = TestBed.inject(DeleteProjectUseCase);
      useCase = TestBed.inject(GetProjectUseCase);
      spyOn(useCase, 'execute').and.returnValue(of(entity));
      spyOn(useCaseDelete, 'execute').and.callThrough();;
      fixture.detectChanges();
    });
   
   
    it('should create', () => {
      expect(component).toBeTruthy();
    });
   
    it('should call GetProjectUseCase with team id and assign the result to team variable', () => {
      const projectId = '1';
      component.ngOnInit();
      expect(useCase.execute).toHaveBeenCalledWith(projectId);
      expect(component.project).toEqual(entity);
    });
/*
    it('should call delteProjectUseCase with team id and assign the result to team variable', async () =>  {
      spyOn(Swal, 'fire').and.returnValue(Promise.resolve({
        isConfirmed: true,
        isDenied: false,
        isDismissed: false,
        value: 'my value'
      }));
      expect(useCaseDelete.execute).not.toHaveBeenCalled();
      const routerNavigateSpy = spyOn(router, 'navigate');  
      component.delete();
      console.log("mi console.log",useCaseDelete.execute)
      await fixture.whenStable();
      /**LOG: HttpErrorResponse{headers: HttpHeaders{normalizedNames: Map{}, lazyUpdate: null, headers: Map{}}, status: 0, statusText: 'Unknown Error', url: 'https://gestion-de-project-backend-production.up.railway.app/project/delete/1', ok: false, name: 'HttpErrorResponse', message: 'Http failure response for https://gestion-de-project-backend-production.up.railway.app/project/delete/1: 0 Unknown Error', error: ProgressEvent{isTrusted: true}}
Chrome 112.0.0.0 (Windows 10): Executed 85 of 85 (7 FAILED) (0.754 secs / 0.642 secs)
LOG: HttpErrorResponse{headers: HttpHeaders{normalizedNames: Map{}, lazyUpdate: null, headers: Map{}}, status: 0, statusText: 'Unknown Error', url: 'https://gestion-de-project-backend-production.up.railway.app/project/delete/1', ok: false, name: 'HttpErrorResponse', message: 'Http failure response for https://gestion-de-project-backend-production.up.railway.app/project/delete/1: 0 Unknown Error', error: ProgressEvent{isTrusted: true}} */
     /* expect(useCaseDelete.execute).toHaveBeenCalled();
      expect(routerNavigateSpy).toHaveBeenCalled();
      
    });*/
   
    it('should navigate to update component on update method', () => {
      const spy = spyOn(router, 'navigate');
      component.projectId = '1';
      component.update();
      expect(spy).toHaveBeenCalledWith(['project/update/1']);
    });
   
    it('should not call deleteprojectUseCase and not navigate on delete method if user cancels', () => {
      const spy = spyOn(service, 'deleteProject').and.callThrough();
      spyOn(window, 'confirm').and.returnValue(false);
      const navigateSpy = spyOn(router, 'navigate');
      component.projectId = '1';
   
      component.delete();
      expect(spy).not.toHaveBeenCalled();
      expect(navigateSpy).not.toHaveBeenCalled();
    });
   });