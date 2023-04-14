import { DeleteMemberUseCase } from "./delete-member.usecase";
import { MemberService } from "src/app/domain/services/member/member.service";

import { of } from "rxjs";
describe('DeleteMemberUseCase', () => {
    let useCase: DeleteMemberUseCase;
    let service: MemberService;
 
    beforeEach(() => {
      service = jasmine.createSpyObj('MemberService', ['deleteMember']);
      useCase = new DeleteMemberUseCase(service);
    });
 
    it('should call deleteMember function of the repository and return an Observable with boolean value', () => {
      const id = '6438958fd38ba6d1049fd6b4';
      const success = true;
      (service.deleteMember as jasmine.Spy).and.returnValue(of(success));
 
      useCase.execute(id).subscribe(result => {
        expect(result).toBe(success);
        expect(service.deleteMember).toHaveBeenCalledWith(id);
      });
    });
  }); 
