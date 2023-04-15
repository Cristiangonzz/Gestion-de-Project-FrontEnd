import { ComponentFixture, TestBed } from "@angular/core/testing";
import { GetOneMemberComponent } from "./get-one-member.component";
import { MemberService } from "src/app/domain/services/member/member.service";
import { ActivatedRoute, Router } from "@angular/router";
import { GetMemberUseCase } from "src/app/application/usecases/member/get-member.usecase";
import { DeleteMemberUseCase } from "src/app/application/usecases/member/delete-member.usecase";
import { IMemberDomainModel } from "src/app/domain/interfaces/member/member.interface.domain";
import { ReactiveFormsModule } from "@angular/forms";
import { of } from "rxjs";
import { useCaseProviders } from "src/app/data/factory";

describe('GetOneMemberComponent', () => {
    let component: GetOneMemberComponent;
    let fixture: ComponentFixture<GetOneMemberComponent>;
    let service: MemberService;
    let router: Router;
    let activatedRoute: ActivatedRoute;
    let useCase: GetMemberUseCase;
    let useCaseDelete: DeleteMemberUseCase;
   
    const entity : IMemberDomainModel = {
        
            _id: "string",
            name: "string",
            document: "string",
            salary: 1,
            role: "string",

            email:"string",
            password:"string",   
    };
   
    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [GetOneMemberComponent],
        imports: [ReactiveFormsModule],
        providers: [
          {
            provide: MemberService,
            useValue: {
              deleteMember: () => of(null),
              
            },
          },
          {
            provide: ActivatedRoute,
            useValue: {
              params: of({ id: '1' }),
            },
          },
          useCaseProviders.getMemberUseCaseProvider,
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
      fixture = TestBed.createComponent(GetOneMemberComponent);
      component = fixture.componentInstance;
      service = TestBed.inject(MemberService);
      router = TestBed.inject(Router);
      activatedRoute = TestBed.inject(ActivatedRoute);
      useCaseDelete = TestBed.inject(DeleteMemberUseCase);
      useCase = TestBed.inject(GetMemberUseCase);
      spyOn(useCase, 'execute').and.returnValue(of(entity));
      fixture.detectChanges();
    });
   
    it('should create', () => {
      expect(component).toBeTruthy();
    });
   
    it('should call GetMemberUseCase with team id and assign the result to team variable', () => {
      const teamId = '1';
      component.ngOnInit();
      expect(useCase.execute).toHaveBeenCalledWith(teamId);
      expect(component.member).toEqual(entity);
    });
   
    it('should navigate to update component on update method', () => {
      const spy = spyOn(router, 'navigate');
      component.memberId = '1';
      component.update();
      expect(spy).toHaveBeenCalledWith(['member/update/1']);
    });
   
    it('should not call DeleteMemberUseCase and not navigate on delete method if user cancels', () => {
      const spy = spyOn(service, 'deleteMember').and.callThrough();
      spyOn(window, 'confirm').and.returnValue(false);
      const navigateSpy = spyOn(router, 'navigate');
      component.memberId = '1';
   
      component.delete();
      expect(spy).not.toHaveBeenCalled();
      expect(navigateSpy).not.toHaveBeenCalled();
    });
   });