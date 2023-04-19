import { ComponentFixture, TestBed } from "@angular/core/testing";
import { UpdateCollaborationComponent } from "./update-collaboration.component";
import { ActivatedRoute, Router } from "@angular/router";
import { UpdateCollaborationUseCase } from "src/app/application/usecases/collaboration/update-collaboration.usecase";
import { IUpdateCollaborationModel } from "src/app/domain/interfaces/collaboration/update-collaboration.interface.domain";
import { ICollaborationDomainModel } from "src/app/domain/interfaces/collaboration/collaboration.interface.domain";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../../shared/shared.module";
import { DataModule } from "src/app/data/data.module";
import { CollaborationService } from "src/app/domain/services/collaboration/collaboration.service";
import { of, throwError } from "rxjs";
import Swal from "sweetalert2";
import { GetCollaborationUseCase } from "src/app/application/usecases/collaboration/get-collaboration.usecase";

describe('UpdateCollaborationComponent', () => {
    let component: UpdateCollaborationComponent;
    let fixture: ComponentFixture<UpdateCollaborationComponent>;
    let useCase: jasmine.SpyObj<UpdateCollaborationUseCase>;
    let useCaseGet: jasmine.SpyObj<GetCollaborationUseCase>;
    let router: Router;
    let routerActivated: ActivatedRoute;
    
    const entityUpdate : IUpdateCollaborationModel = {
        _id:"123",
        comment: "string",
        notification: "string",
        progress: "string",
        performence: "string",  
    };
    const entityModel : ICollaborationDomainModel = {
        
        comment: "string",
        notification: "string",
        progress: "string",
        performence: "string",    
    };
    beforeEach(async () => {
      
        useCase = jasmine.createSpyObj('UpdateCollaborationUseCase', ['execute']);
        useCaseGet = jasmine.createSpyObj('GetCollaborationUseCase', ['execute']);
      
      await TestBed.configureTestingModule({
        declarations: [ UpdateCollaborationComponent],
        imports: [ FormsModule, ReactiveFormsModule ,SharedModule ,DataModule],
        providers: [
            { provide: UpdateCollaborationUseCase, useValue: useCase },
            { provide: GetCollaborationUseCase, useValue: useCaseGet },
            {
                provide: CollaborationService,
                useValue: {
                    updateCollaboration: () => of(entityModel),
                    getCollaboration: () => of(entityModel),
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
      fixture = TestBed.createComponent(UpdateCollaborationComponent);
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
  
        expect(useCase.execute).toHaveBeenCalledWith(entityUpdate);
        expect(routerSpy).toHaveBeenCalled();
        expect(swalSpy).toHaveBeenCalled();

        });
  
        it('should log error on failure', () => {
            const mockError = new Error('test error');
         
            spyOn(useCase, 'execute').and.returnValue(throwError(mockError));
            const consoleSpy = spyOn(console, 'log');
        
            component.FormUpdate.setValue(entityModel);
            component.send();
        
            expect(consoleSpy).toHaveBeenCalled();
          });
    });

    describe('upDateFromApi()', () => {
        it('should call the collaborationService to get collaboration details', () => {
            useCaseGet.execute.and.returnValue(of(entityModel));
          
          component.upDateFromApi();
          expect(useCaseGet).toHaveBeenCalled();
          expect(component.FormUpdate.value).toEqual(entityModel);
        });
      });
  });
