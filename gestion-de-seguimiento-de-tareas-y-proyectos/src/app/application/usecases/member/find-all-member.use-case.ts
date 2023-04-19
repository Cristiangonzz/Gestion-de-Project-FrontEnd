import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { Injectable } from '@angular/core';
import { MemberService } from 'src/app/domain/services/member/member.service';
import { IMemberDomainModel } from 'src/app/domain/interfaces/member/member.interface.domain';

@Injectable({
    providedIn: 'root'
})
export class FindAllMemberUseCase implements UseCase<undefined, IMemberDomainModel[]> {

    constructor(private memberService: MemberService) { }

    execute(): Observable<IMemberDomainModel[]> {
        return this.memberService.findAllMember();
    }
}