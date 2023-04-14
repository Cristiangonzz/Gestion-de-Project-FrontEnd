import { Observable } from 'rxjs';
import { IMemberDomainModel } from 'src/app/domain/interfaces/member/member.interface.domain';
import { IUpdateMemberModel } from 'src/app/domain/interfaces/member/update-member.interface.domain';
import { IRegisterMemberDomainModel } from '../../interfaces/member/register-member.interface.domain';
import { Injectable } from '@angular/core';
import { SignInModel } from '../../interfaces/member/singin.member.domain.interfaces';

@Injectable({
    providedIn: 'root'
})
export abstract class MemberService {
    
    abstract signIn(params: SignInModel): Observable<string>;
    
    abstract register(params: IRegisterMemberDomainModel ): Observable<IMemberDomainModel>;
    
    abstract deleteMember(data: string): Observable<boolean>;

    abstract getMember(data :string): Observable<IMemberDomainModel>;

    abstract getEmailMember(data :string): Observable<IMemberDomainModel>;

    abstract updateMember(entity: IUpdateMemberModel): Observable<IMemberDomainModel>;
}