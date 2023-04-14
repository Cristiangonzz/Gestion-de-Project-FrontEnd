import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import { RegisterMemberUseCase } from "./register-member.usecase";
import { MemberService } from "src/app/domain/services/member/member.service";
import { IRegisterMemberDomainModel } from "src/app/domain/interfaces/member/register-member.interface.domain";
import { IMemberDomainModel } from "src/app/domain/interfaces/member/member.interface.domain";

describe('RegisterMemberUseCase', () => {
    let useCase: RegisterMemberUseCase;
    let service: MemberService;
  
    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          RegisterMemberUseCase,
          {
            provide: MemberService,
            useValue: jasmine.createSpyObj('MemberService', ['register'])
          }
        ]
      });
  
      useCase = TestBed.inject(RegisterMemberUseCase);
      service = TestBed.inject(MemberService);
    });
  
    it('should call register function of the service and return an Observable with IRegisterMemberDomainModel', () => {
     
        const entity: IRegisterMemberDomainModel = {
            name: "string",
            document: "string",
            salary: 0,
            role: "string",
        
            email:"string",
            password:"string", 
        };
        const param : IMemberDomainModel = {
                    _id: "1232121313",
                    name: "string",
                    document: "string",
                    salary: 0,
                    role: "string",
                
                    email:"string",
                    password:"string", 
        };

      (service.register as jasmine.Spy).and.returnValue(of(param));
  
      useCase.execute(entity).subscribe(result => {
        expect(result).toEqual(param);
        expect(service.register).toHaveBeenCalledWith(entity);
      });
    });
  });