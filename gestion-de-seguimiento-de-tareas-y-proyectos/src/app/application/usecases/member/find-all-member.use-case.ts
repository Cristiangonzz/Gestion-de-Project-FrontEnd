import { BehaviorSubject, Observable, asyncScheduler } from 'rxjs';
import { Injectable } from '@angular/core';
import { MemberService } from 'src/app/domain/services/member/member.service';
import { IMemberDomainModel } from 'src/app/domain/interfaces/member/member.interface.domain';

@Injectable({
    providedIn: 'root'
})
export class FindAllMemberUseCase  {

    constructor(private memberService: MemberService) { }

    private status : IMemberDomainModel[] =  [];
    
    public statusEmmit : BehaviorSubject<IMemberDomainModel[]>
    = new BehaviorSubject<IMemberDomainModel[]>(this.status);
    
    execute = () =>{
        
        if(this.statusEmmit.observed && !this.statusEmmit.closed){
        this.memberService.findAllMember()
                .subscribe({
                    next: (value:IMemberDomainModel[] ) => { this.status = value; },
                    complete: () => 
                    {
                        this.statusEmmit.next(this.status);
                        console.log("complete");
                        asyncScheduler.schedule(this.execute, 1000); 
                    }
                });
        } else {
            asyncScheduler.schedule(this.execute, 100);
        }   

    }
}