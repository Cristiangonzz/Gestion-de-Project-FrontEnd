  import { ComponentFixture, TestBed } from '@angular/core/testing';

  import { UpdateMemberComponent } from './update-member.component';
import { IUpdateMemberModel } from 'src/app/domain/interfaces/member/update-member.interface.domain';
import { ActivatedRoute, Router } from '@angular/router';
import { MemberService } from 'src/app/domain/services/member/member.service';
import { of, throwError } from 'rxjs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { DataModule } from 'src/app/data/data.module';
import { GetMemberUseCase } from 'src/app/application/usecases/member/get-member.usecase';
import { IMemberDomainModel } from 'src/app/domain/interfaces/member/member.interface.domain';
import { UpdateMemberUseCase } from 'src/app/application/usecases/member/update-member.usecase';
import Swal from 'sweetalert2';

describe('UpdateMemberComponent', () => {
    let component: UpdateMemberComponent;
    let fixture: ComponentFixture<UpdateMemberComponent>;
    let useCase: jasmine.SpyObj<UpdateMemberUseCase>;
    let useCaseGet: jasmine.SpyObj<GetMemberUseCase>;
    let router: Router;
    let routerActivated: ActivatedRoute;
    const entityModel : IUpdateMemberModel = {
        _id:"123",
        name: "",
        document: "",
        salary: 0,
        role: "",
        email:"",
        password:"",  
    };
    const entityUpdate  = {
      name: "",
      document: "",
      salary: 0,
      role: "",
      email:"",
      password:"",  
  };
    beforeEach(async () => {
      
        useCase = jasmine.createSpyObj('UpdateMemberUseCase', ['execute']);
        useCaseGet = jasmine.createSpyObj('GetMemberUseCase', ['execute']);
      
      await TestBed.configureTestingModule({
        declarations: [ UpdateMemberComponent],
        imports: [ FormsModule, ReactiveFormsModule ,SharedModule ,DataModule],
        providers: [
            { provide: UpdateMemberUseCase, useValue: useCase },
            { provide: GetMemberUseCase, useValue: useCaseGet },
            {
                provide: MemberService,
                useValue: {
                    updateMember: () => of(entityModel),
                    getMember: () => of(entityModel),
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
      fixture = TestBed.createComponent(UpdateMemberComponent);
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
  
        component.FormUpdate.setValue(entityUpdate);
        component.send();
  
        expect(useCase.execute).toHaveBeenCalled();
        expect(routerSpy).toHaveBeenCalled();
        expect(swalSpy).toHaveBeenCalledWith();

        });
  
        it('should log error on failure', () => {
            const mockError = new Error('test error');
         
            spyOn(useCase, 'execute').and.returnValue(throwError(mockError));
            const consoleSpy = spyOn(console, 'log');
        
            component.FormUpdate.setValue(entityModel);
            component.send();
        
            expect(consoleSpy).toHaveBeenCalledWith(mockError);
          });
    });

    describe('upDateFromApi()', () => {
      it('should call the collaborationService to get collaboration details', () => {
          useCaseGet.execute.and.returnValue(of(entityModel));
        
        component.upDateFromApi();
        expect(useCaseGet).toHaveBeenCalledWith(entityModel._id);
        expect(component.FormUpdate.value).toEqual(entityModel);
      });
    });
  });
