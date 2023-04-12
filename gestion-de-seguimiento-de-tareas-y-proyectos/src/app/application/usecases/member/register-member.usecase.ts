import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { MemberService } from 'src/app/domain/services/member/member.service';
import { IMemberDomainModel } from 'src/app/domain/interfaces/member/member.interface.domain';
import { IRegisterMemberDomainModel } from 'src/app/domain/interfaces/member/register-member.interface.domain';
import { Injectable } from '@angular/core';
import { MemberImplementationRepository } from 'src/app/data/repositories/member/member-implementation.repository';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class RegisterMemberUseCase implements UseCase<IRegisterMemberDomainModel, IMemberDomainModel> {
    //private memberService: MemberService;
    constructor(public memberService: MemberImplementationRepository) { }
    // constructor (private httpClient: HttpClient) {
    //     this.memberService = new MemberImplementationRepository(httpClient);
    //  }

    execute(
        params: IRegisterMemberDomainModel): Observable<IMemberDomainModel> {
        return this.memberService.register(params);
    }
}