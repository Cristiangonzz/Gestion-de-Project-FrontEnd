import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberImplementationRepository } from 'src/app/data/repositories/member/member-implementation.repository';
import { SignInModel } from 'src/app/domain/interfaces/member/singin.member.domain.interfaces';
import { MemberService } from 'src/app/domain/services/member/member.service';
import { UseCase } from 'src/app/domain/use-case';

@Injectable({
    providedIn: 'root'
})
export class SingInMemberUseCase implements UseCase<SignInModel, string> {

    constructor(private readonly memberService: MemberService) { }

    execute(params: SignInModel): Observable<string> {
        return this.memberService.signIn(params);
    }
}