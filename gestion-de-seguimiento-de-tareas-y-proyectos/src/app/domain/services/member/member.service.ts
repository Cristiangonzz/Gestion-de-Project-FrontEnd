import { Observable } from 'rxjs';
import { IMemberDomainModel } from 'src/app/domain/interfaces/member/member.interface.domain';
import { IUpdateMemberModel } from 'src/app/domain/interfaces/member/update-member.interface.domain';
import { IRegisterMemberDomainModel } from '../../interfaces/member/register-member.interface.domain';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export abstract class MemberService {
    
    abstract signIn(params: {email: string, password: string}): Observable<IMemberDomainModel>;
    
    abstract register(params: IRegisterMemberDomainModel ): Observable<IMemberDomainModel>;
    
    abstract deleteMember(data: string): Observable<boolean>;

    abstract getMember(data :string): Observable<IMemberDomainModel>;

    abstract updateMember(entity: IUpdateMemberModel): Observable<IMemberDomainModel>;
}