import { Observable } from 'rxjs';
import { UseCase } from 'src/domain/use-case';
import { MemberService } from 'src/domain/services/member/member.service';
import { IMemberDomainModel } from 'src/domain/interfaces/member/member.interface.domain';

export class RegisterMemberUseCase implements UseCase<
    {
        name: string,
        document: string,
        salary: string,
        role: string,
        email: string,
        password: string,
    }, IMemberDomainModel> {

    constructor(private memberService: MemberService) { }

    execute(
        params: 
        { 
            name: string,
            document: string,
            salary: string,
            role: string,
            email: string,
            password: string,
        },
    ): Observable<IMemberDomainModel> {
        return this.memberService.register(params);
    }
}