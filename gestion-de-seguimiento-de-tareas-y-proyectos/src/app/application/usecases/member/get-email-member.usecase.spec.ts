import { GetEmailMemberUseCase } from "./get-email-member.usecase";
import { MemberService } from "src/app/domain/services/member/member.service";
import { IMemberDomainModel } from "src/app/domain/interfaces/member/member.interface.domain";

import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
describe('GetEmailMemberUseCase', () => {
    let useCase: GetEmailMemberUseCase;
    let service: MemberService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          GetEmailMemberUseCase,
          {
            provide: MemberService,
            useValue: jasmine.createSpyObj('MemberService', ['getEmailMember'])
          }
        ]
      });
  
      useCase = TestBed.inject(GetEmailMemberUseCase);
      service = TestBed.inject(MemberService);
    });
  
    it('should call getEmailMember function of the service and return an Observable with IMemberDomainModel', () => {
      const data = 'collaboration-id';
      const collaboration: IMemberDomainModel = {
         _id: "string",
        name: "string",
        document: "string",
        salary: 12,
        role: "string",

        email:"cris@gmail.com",
        password:"string",
      };
      (service.getEmailMember as jasmine.Spy).and.returnValue(of(collaboration));
  
      useCase.execute(data).subscribe(result => {
        expect(result).toEqual(collaboration);
        expect(service.getEmailMember).toHaveBeenCalledWith(data);
      });
    });
  });