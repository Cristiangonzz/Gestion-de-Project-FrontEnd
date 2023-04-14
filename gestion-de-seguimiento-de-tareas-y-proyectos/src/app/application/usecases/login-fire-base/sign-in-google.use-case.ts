import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider,signInWithPopup, UserCredential } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { UseCase } from 'src/app/domain/use-case';

@Injectable({
    providedIn: 'root'
})
export class SignInGoogleUseCase  implements UseCase<undefined,UserCredential>  {

    constructor(private auth : Auth) { }

    execute():Observable<UserCredential>{
        return from(signInWithPopup(this.auth, new GoogleAuthProvider()))
    }
}