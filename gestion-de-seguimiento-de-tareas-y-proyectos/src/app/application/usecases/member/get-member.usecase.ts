import { Observable } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';
import { IMemberDomainModel } from 'src/app/domain/interfaces/member/member.interface.domain';
import { MemberImplementationRepository } from 'src/app/data/repositories/member/member-implementation.repository';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class GetMemberUseCase implements UseCase<string, IMemberDomainModel> {


    //constructor(private readonly memberService: MemberService) { }
    
    constructor (private readonly  memberService: MemberImplementationRepository) {
    }


//Aca podriamos hacer una behaviorSubject para que cuando se ejecute el usecase se emita el valor y se pueda subscribir a el
    execute(data : string): Observable<IMemberDomainModel> {
        return this.memberService.getMember(data);
    }
}