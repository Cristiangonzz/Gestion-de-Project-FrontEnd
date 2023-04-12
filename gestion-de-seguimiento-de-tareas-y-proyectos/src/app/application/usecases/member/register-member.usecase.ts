import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { MemberService } from 'src/app/domain/services/member/member.service';
import { IMemberDomainModel } from 'src/app/domain/interfaces/member/member.interface.domain';
import { IRegisterMemberDomainModel } from 'src/app/domain/interfaces/member/register-member.interface.domain';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class RegisterMemberUseCase implements UseCase<IRegisterMemberDomainModel, IMemberDomainModel> {
  
    constructor(private readonly memberService: MemberService) { }

    execute(
        params: IRegisterMemberDomainModel): Observable<IMemberDomainModel> {
        return this.memberService.register(params);
    }
}