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
        imports: [ReactiveFormsModule],
        providers: [
          {
            provide: ProjectService,
            useValue: {
              deleteProject: () => of(null),
              //getTeam: () => of(null),
            },
          },
          {
            provide: ActivatedRoute,
            useValue: {
              params: of({ id: '1' }),
            },
          },
          useCaseProviders.getProjectUseCaseProvider,
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
      fixture.detectChanges();
    });
   
    it('should create', () => {
      expect(component).toBeTruthy();
    });
   
    it('should call GetProjectUseCase with team id and assign the result to team variable', () => {
      const teamId = '1';
      component.ngOnInit();
      expect(useCase.execute).toHaveBeenCalledWith(teamId);
      expect(component.project).toEqual(entity);
    });
   
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