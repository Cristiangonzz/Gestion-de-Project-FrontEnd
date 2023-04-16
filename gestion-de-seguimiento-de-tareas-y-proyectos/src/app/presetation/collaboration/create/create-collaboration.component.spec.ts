 import { ComponentFixture, TestBed } from "@angular/core/testing";
 import { CreateCollaborationComponent } from "./create-collaboration.component";
 import { CollaborationService } from "src/app/domain/services/collaboration/collaboration.service";
 import { FormsModule, ReactiveFormsModule } from "@angular/forms";
 import { ICollaborationDomainModel } from "src/app/domain/interfaces/collaboration/collaboration.interface.domain";
 import { of } from "rxjs";
 import { Router } from "@angular/router";
 import { RegisterCollaborationUseCase } from "src/app/application/usecases/collaboration/register-collaboration.usecase";
 import { InputComponent } from "../../shared/input/input.component";
 import { SharedModule } from "../../shared/shared.module";



 describe('CreateCollaborationComponent', () => {
     let component: CreateCollaborationComponent;
     let fixture: ComponentFixture<CreateCollaborationComponent>;
     let useCase: jasmine.SpyObj<RegisterCollaborationUseCase>;
     let router: Router;
     const entity : ICollaborationDomainModel = {
        
         comment: "string",
         notification: "string",
         progress: "string",
         performence: "string",   
     };
     beforeEach(async () => {
      
         useCase = jasmine.createSpyObj('RegisterCollaborationUseCase', ['execute']);
      
       await TestBed.configureTestingModule({
         declarations: [ CreateCollaborationComponent],
         imports: [ FormsModule, ReactiveFormsModule ,SharedModule],
         providers: [
             { provide: RegisterCollaborationUseCase, useValue: useCase },
             {
                 provide: CollaborationService,
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
       fixture = TestBed.createComponent(CreateCollaborationComponent);
       component = fixture.componentInstance;
       router = TestBed.inject(Router);
       fixture.detectChanges();
     });
  
     it('should create', () => {
       expect(component).toBeTruthy();
     });
  
     describe('send()', () => {
       it('should call register method of CollaborationService with form value and redirect to sign-in page on success', () => {
      
         useCase.execute.and.returnValue(of(entity));
         const routerSpy = spyOn(router, 'navigate');
  
         component.FormCreate.setValue(entity);
         component.send();
  
         expect(useCase.execute).toHaveBeenCalled();
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