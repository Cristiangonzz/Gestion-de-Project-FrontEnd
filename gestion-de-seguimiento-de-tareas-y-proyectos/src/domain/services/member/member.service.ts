import { Observable } from 'rxjs';
import { IMemberDomainModel } from 'src/domain/interfaces/member/member.interface.domain';
import { IUpdateMemberModel } from 'src/domain/interfaces/member/update-member.interface.domain';

export abstract class MemberService {
    abstract signIn(params: {email: string, password: string}): Observable<IMemberDomainModel>;
    
    abstract register(params: IMemberDomainModel ): Observable<IMemberDomainModel>;
    
    abstract deleteMember(data: string): Observable<boolean>;

    abstract getMember(data :string): Observable<IMemberDomainModel>;

    abstract updateMember(entity: IUpdateMemberModel): Observable<IMemberDomainModel>;
}