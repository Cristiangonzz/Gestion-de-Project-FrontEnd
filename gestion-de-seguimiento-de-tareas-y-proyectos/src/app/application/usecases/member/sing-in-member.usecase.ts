import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMemberDomainModel } from 'src/app/domain/interfaces/member/member.interface.domain';
import { MemberService } from 'src/app/domain/services/member/member.service';
import { UseCase } from 'src/app/domain/use-case';

@Injectable({
    providedIn: 'root'
})
export class SingInMemberUseCase implements UseCase<{ email: string; password: string }, IMemberDomainModel> {

    constructor(private memberService: MemberService) { }

    execute(
        params: { email: string, password: string },
    ): Observable<IMemberDomainModel> {
        return this.memberService.signIn(params);
    }
}