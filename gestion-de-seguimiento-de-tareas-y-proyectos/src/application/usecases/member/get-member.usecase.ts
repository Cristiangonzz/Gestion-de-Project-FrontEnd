import { Observable } from 'rxjs';
import { UseCase } from 'src/domain/use-case';
import { MemberService } from 'src/domain/services/member/member.service';
import { IMemberDomainModel } from 'src/domain/interfaces/member/member.interface.domain';

export class GetMemberUseCase implements UseCase<string, IMemberDomainModel> {

    constructor(private memberService: MemberService) { }

    execute(data : string): Observable<IMemberDomainModel> {
        return this.memberService.getMember(data);
    }
}