import { Observable } from 'rxjs';
import { IMemberDomainModel } from 'src/domain/interfaces/member/member.interface.domain';

export abstract class MemberService {
    abstract signIn(params: {email: string, password: string}): Observable<IMemberDomainModel>;
    
    abstract register(params: 
        {
            name: string,
            document: string,
            salary: string,
            role: string,
            email: string,
            password: string,
        }): Observable<IMemberDomainModel>;
    
    abstract deleteMember(data: string): Observable<boolean>;

    abstract getMember(data :string): Observable<IMemberDomainModel>;

    abstract updateMember(
        entity: 
        {
            _id:string
            name: string,
            document: string,
            salary: string,
            role: string,
            email: string,
            password: string,
        }): Observable<IMemberDomainModel>;
}