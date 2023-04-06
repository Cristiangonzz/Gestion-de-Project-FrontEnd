import { Observable } from 'rxjs';
import { UseCase } from 'src/domain/use-case';
import { MemberService } from 'src/domain/services/member/member.service';
import { IMemberDomainModel } from 'src/domain/interfaces/member/member.interface.domain';
import { IUpdateMemberModel } from 'src/domain/interfaces/member/update-member.interface.domain';

export class UpdateMemberUseCase implements UseCase<IUpdateMemberModel, IMemberDomainModel> {

    constructor(private memberService: MemberService) { }

    execute(data :IUpdateMemberModel): Observable<IMemberDomainModel> {
        return this.memberService.updateMember(data);
    }
}