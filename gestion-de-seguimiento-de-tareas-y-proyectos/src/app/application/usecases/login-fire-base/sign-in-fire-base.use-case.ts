import { Injectable } from '@angular/core';
import { SignInModel } from 'src/app/domain/interfaces/member/singin.member.domain.interfaces';
import { Auth, signInWithEmailAndPassword, UserCredential } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';

@Injectable({
    providedIn: 'root'
})
export class SignInFireBaseUseCase  implements UseCase<SignInModel,UserCredential>{

    constructor(private auth : Auth) { }

    execute(params: SignInModel):Observable<UserCredential>{
        return from(signInWithEmailAndPassword(this.auth,params.email,params.password))
    }
}