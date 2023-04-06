import { Observable } from 'rxjs';
import { UseCase } from 'src/domain/use-case';
import { MemberService } from 'src/domain/services/member/member.service';
import { IMemberDomainModel } from 'src/domain/interfaces/member/member.interface.domain';

export class RegisterMemberUseCase implements UseCase<IMemberDomainModel, IMemberDomainModel> {

    constructor(private memberService: MemberService) { }

    execute(
        params: IMemberDomainModel): Observable<IMemberDomainModel> {
        return this.memberService.register(params);
    }
}