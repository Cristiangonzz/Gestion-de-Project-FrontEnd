import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { UpdateMemberUseCase } from "./update-member.usecase";
import { MemberService } from "src/app/domain/services/member/member.service";
import { IMemberDomainModel } from "src/app/domain/interfaces/member/member.interface.domain";
import { IUpdateMemberModel } from "src/app/domain/interfaces/member/update-member.interface.domain";

describe('UpdateMemberUseCase', () => {
    let useCase: UpdateMemberUseCase;
    let service: MemberService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          UpdateMemberUseCase,
          {
            provide: MemberService,
            useValue: jasmine.createSpyObj('MemberService', ['updateMember'])
          }
        ]
      });
  
      useCase = TestBed.inject(UpdateMemberUseCase);
      service = TestBed.inject(MemberService);
    });
  
    it('should call updateMember function of the service and return an Observable with IupdateMemberMemberDomainModel', () => {
     
        const entity: IMemberDomainModel = {
             _id: "string",
            name: "string",
            document: "string",
            salary: 12,
            role: "string",

            email:"string",
            password:"string",
        };
      const update : IUpdateMemberModel = {
        _id: "string",
        name: "string",
        document: "string",
        salary: 12,
        role: "string",

        email:"string",
        password:"string",
      };

      (service.updateMember as jasmine.Spy).and.returnValue(of(entity));
  
      useCase.execute(update).subscribe(result => {
        expect(result).toEqual(entity);
        expect(service.updateMember).toHaveBeenCalledWith(update);
      });
    });
  });