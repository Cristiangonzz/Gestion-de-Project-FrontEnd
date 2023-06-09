import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { IMemberDomainModel } from 'src/app/domain/interfaces/member/member.interface.domain';
import { IUpdateMemberModel } from 'src/app/domain/interfaces/member/update-member.interface.domain';
import { Injectable } from '@angular/core';
import { MemberService } from 'src/app/domain/services/member/member.service';
@Injectable({
    providedIn: 'root'
})
export class UpdateMemberUseCase implements UseCase<IUpdateMemberModel, IMemberDomainModel> {

    
    constructor (private readonly  memberService: MemberService) {}

    execute(data :IUpdateMemberModel): Observable<IMemberDomainModel> {
        return this.memberService.updateMember(data);
    }

}