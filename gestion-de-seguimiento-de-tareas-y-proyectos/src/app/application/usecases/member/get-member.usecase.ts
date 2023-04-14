import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { IMemberDomainModel } from 'src/app/domain/interfaces/member/member.interface.domain';
import { Injectable } from '@angular/core';
import { MemberService } from 'src/app/domain/services/member/member.service';

@Injectable({
    providedIn: 'root'
})

export class GetMemberUseCase implements UseCase<string, IMemberDomainModel> {

    constructor(private readonly memberService: MemberService) { }
 
    execute(data : string): Observable<IMemberDomainModel> {
        return this.memberService.getMember(data);
    }
}