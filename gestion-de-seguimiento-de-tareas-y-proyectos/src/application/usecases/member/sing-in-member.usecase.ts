import { Observable } from 'rxjs';
import { IMemberDomainModel } from 'src/domain/interfaces/member/member.interface.domain';
import { MemberService } from 'src/domain/services/member/member.service';
import { UseCase } from 'src/domain/use-case';

export class SingInMemberUseCase implements UseCase<{ email: string; password: string }, IMemberDomainModel> {

    constructor(private memberService: MemberService) { }

    execute(
        params: { email: string, password: string },
    ): Observable<IMemberDomainModel> {
        return this.memberService.signIn(params);
    }
}