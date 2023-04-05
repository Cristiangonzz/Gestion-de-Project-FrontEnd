import { Observable } from 'rxjs';
import { UseCase } from 'src/domain/use-case';
import { MemberService } from 'src/domain/services/member/member.service';

export class DeleteMemberUseCase implements UseCase<string, boolean> {

    constructor(private memberService: MemberService) { }

    execute(data : string): Observable<boolean> {
        return this.memberService.deleteMember(data);
    }
}