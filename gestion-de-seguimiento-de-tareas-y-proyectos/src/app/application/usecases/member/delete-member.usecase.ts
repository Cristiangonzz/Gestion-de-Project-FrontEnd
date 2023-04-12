import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberImplementationRepository } from 'src/app/data/repositories/member/member-implementation.repository';
import { UseCase } from 'src/app/domain/use-case';
import { MemberService } from '../../../domain/services/member/member.service';
@Injectable({
    providedIn: 'root'
})
export class DeleteMemberUseCase implements UseCase<string, boolean> {

    constructor(private memberService: MemberService) { }

    execute(data : string): Observable<boolean> {
        return this.memberService.deleteMember(data);
    }
}