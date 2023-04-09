import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { IMemberDomainModel } from 'src/app/domain/interfaces/member/member.interface.domain';
import { IUpdateMemberModel } from 'src/app/domain/interfaces/member/update-member.interface.domain';
import { MemberImplementationRepository } from 'src/app/data/repositories/member/member-implementation.repository';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class UpdateMemberUseCase implements UseCase<IUpdateMemberModel, IMemberDomainModel> {

    //constructor(private memberService: MemberService) {}
    
    constructor (private readonly  memberService: MemberImplementationRepository) {}

    execute(data :IUpdateMemberModel): Observable<IMemberDomainModel> {
        return this.memberService.updateMember(data);
    }

}