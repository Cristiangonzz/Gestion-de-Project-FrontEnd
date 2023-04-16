import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateProjectComponent } from './update-project.component';
import { UpdateProjectUseCase } from 'src/app/application/usecases/proyect/update-project.usecase';
import { ActivatedRoute, Router } from '@angular/router';
import { IUpdateProjectModel } from 'src/app/domain/interfaces/proyect/update-proyect.interface.domain';
import { IProjectDomainModel } from 'src/app/domain/interfaces/proyect/proyect.interface.domain';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ProjectService } from 'src/app/domain/services/proyect/proyect.service';
import { of } from 'rxjs';
import { DataModule } from 'src/app/data/data.module';
import Swal from 'sweetalert2';

describe('UpdateProjectComponent', () => {
    let component: UpdateProjectComponent;
    let fixture: ComponentFixture<UpdateProjectComponent>;
    let useCase: jasmine.SpyObj<UpdateProjectUseCase>;
    let router: Router;
    let routerActivated: ActivatedRoute;
    const entityUpdate : IUpdateProjectModel = {
        _id:"123",
        name: "string",
        dataExpiration: "string",
        progress : "string",
        priority: "string" ,   
    };
    const entityModel : IProjectDomainModel = {
        
        name: "string",
        dataExpiration: "string",
        progress : "string",
        priority: "string" ,   
    };
    beforeEach(async () => {
      
        useCase = jasmine.createSpyObj('UpdateProjectUseCase', ['execute']);
      
      await TestBed.configureTestingModule({
        declarations: [ UpdateProjectComponent],
        imports: [ FormsModule, ReactiveFormsModule ,SharedModule ,DataModule],
        providers: [
            { provide: UpdateProjectUseCase, useValue: useCase },
            {
                provide: ProjectService,
                useValue: {
                    updateProject: () => of(entityModel),
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
      fixture = TestBed.createComponent(UpdateProjectComponent);
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
