
import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { GetMemberUseCase } from "./get-member.usecase";
import { MemberService } from "src/app/domain/services/member/member.service";
import { IMemberDomainModel } from "src/app/domain/interfaces/member/member.interface.domain";

describe('GetMemberUseCase', () => {
    let useCase: GetMemberUseCase;
    let service: MemberService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          GetMemberUseCase,
          {
            provide: MemberService,
            useValue: jasmine.createSpyObj('MemberService', ['getMember'])
          }
        ]
      });
  
      useCase = TestBed.inject(GetMemberUseCase);
      service = TestBed.inject(MemberService);
    });
  
    it('should call getEmailMember function of the service and return an Observable with IMemberDomainModel', () => {
      const data = '1231231231231';
      const member: IMemberDomainModel = {
         _id: data,
        name: "string",
        document: "string",
        salary: 12,
        role: "string",

        email:"cris@gmail.com",
        password:"string",
      };
      (service.getMember as jasmine.Spy).and.returnValue(of(member));
  
      useCase.execute(data).subscribe(result => {
        expect(result).toEqual(member);
        expect(service.getMember).toHaveBeenCalledWith(data);
      });
    });
  });