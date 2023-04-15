import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GetOneCollaborationComponent } from "./get-one-collaboration.component";
import { ActivatedRoute, Router } from "@angular/router";
import { CollaborationService } from "src/app/domain/services/collaboration/collaboration.service";
import { ICollaborationDomainModel } from "src/app/domain/interfaces/collaboration/collaboration.interface.domain";
import { GetCollaborationUseCase } from "src/app/application/usecases/collaboration/get-collaboration.usecase";
import { DeleteCollaborationUseCase } from "src/app/application/usecases/collaboration/delete-collaboration.usecase";
import { ReactiveFormsModule } from "@angular/forms";
import { of } from "rxjs";
import { useCaseProviders } from "src/app/data/factory";

describe('GetOneCollaborationComponent', () => {
    let component: GetOneCollaborationComponent;
    let fixture: ComponentFixture<GetOneCollaborationComponent>;
    let service: CollaborationService;
    let router: Router;
    let activatedRoute: ActivatedRoute;
    let useCase: GetCollaborationUseCase;
    let useCaseDelete: DeleteCollaborationUseCase;
   
    const entity : ICollaborationDomainModel = {
        
        comment: "string",
        notification: "string",
        progress: "string",
        performence: "string",   
    };
   
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [GetOneCollaborationComponent],
        imports: [ReactiveFormsModule],
        providers: [
          {
            provide: CollaborationService,
            useValue: {
              deleteCollaboration: () => of(null),
              
            },
          },
          {
            provide: ActivatedRoute,
            useValue: {
              params: of({ id: '1' }),
            },
          },
          useCaseProviders.getCollaborationUseCaseProvider,
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
      fixture = TestBed.createComponent(GetOneCollaborationComponent);
      component = fixture.componentInstance;
      service = TestBed.inject(CollaborationService);
      router = TestBed.inject(Router);
      activatedRoute = TestBed.inject(ActivatedRoute);
      useCaseDelete = TestBed.inject(DeleteCollaborationUseCase);
      useCase = TestBed.inject(GetCollaborationUseCase);
      spyOn(useCase, 'execute').and.returnValue(of(entity));
      fixture.detectChanges();
    });
   
    it('should create', () => {
      expect(component).toBeTruthy();
    });
   
    it('should call GetMemberUseCase with team id and assign the result to team variable', () => {
      const collaborationId = '1';
      component.ngOnInit();
      expect(useCase.execute).toHaveBeenCalledWith(collaborationId);
      expect(component.collaboration).toEqual(entity);
    });
   
    it('should navigate to update component on update method', () => {
      const spy = spyOn(router, 'navigate');
      component.collaborationId = '1';
      component.update();
      expect(spy).toHaveBeenCalledWith(['collaboration/update/1']);
    });
   
    it('should not call DeletecollaborationUseCase and not navigate on delete method if user cancels', () => {
      const spy = spyOn(service, 'deleteCollaboration').and.callThrough();
      spyOn(window, 'confirm').and.returnValue(false);
      const navigateSpy = spyOn(router, 'navigate');
      component.collaborationId = '1';
   
      component.delete();
      expect(spy).not.toHaveBeenCalled();
      expect(navigateSpy).not.toHaveBeenCalled();
    });
   });