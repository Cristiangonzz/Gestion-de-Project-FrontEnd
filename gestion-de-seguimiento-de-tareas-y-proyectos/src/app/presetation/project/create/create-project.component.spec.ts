import { ComponentFixture, TestBed } from "@angular/core/testing";
import { CreateProjectComponent } from "./create-project.component";
import { RegisterProjectUseCase } from "src/app/application/usecases/proyect/register-project.usecase";
import { Router } from "@angular/router";
import { IProjectDomainModel } from "src/app/domain/interfaces/proyect/proyect.interface.domain";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { of } from "rxjs";
import { ProjectService } from "src/app/domain/services/proyect/proyect.service";



describe('CreateProjectComponent', () => {
    let component: CreateProjectComponent;
    let fixture: ComponentFixture<CreateProjectComponent>;
    let useCase: jasmine.SpyObj<RegisterProjectUseCase>;
    let router: Router;
    const entity : IProjectDomainModel = {
        
        name: "string",
        dataExpiration: "string",
        progress : "string",
        priority: "string" ,   
    };
    beforeEach(async () => {
      
        useCase = jasmine.createSpyObj('RegisterProjectUseCase', ['execute']);
      
      await TestBed.configureTestingModule({
        declarations: [ CreateProjectComponent],
        imports: [ FormsModule, ReactiveFormsModule ,SharedModule],
        providers: [
            { provide: RegisterProjectUseCase, useValue: useCase },
            {
                provide: ProjectService,
                useValue: {
                register: () => of(entity),
                },
                },
          {
            provide: Router,
            useValue: {
              navigate: () => {},
            },
          },

        ]
      })
      .compileComponents();
    });
  
    beforeEach(() => {
      fixture = TestBed.createComponent(CreateProjectComponent);
      component = fixture.componentInstance;
      router = TestBed.inject(Router);
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
    describe('send()', () => {
      it('should call register method of ProjectService with form value and redirect to sign-in page on success', () => {
      
        useCase.execute.and.returnValue(of(entity));
        const routerSpy = spyOn(router, 'navigate');
  
        component.FormCreate.setValue(entity);
        component.send();
  
        expect(useCase.execute).toHaveBeenCalledWith(entity);
        expect(routerSpy).toHaveBeenCalled();
      });
  
      it('should log error on failure', () => {
        const error = new Error('test error');
        useCase.execute.and.returnValue(of(entity));
        const consoleSpy = spyOn(console, 'log');
  
        component.FormCreate.setValue(entity);
        component.send();
  
        expect(consoleSpy).toHaveBeenCalled();
      });
    });
  });
