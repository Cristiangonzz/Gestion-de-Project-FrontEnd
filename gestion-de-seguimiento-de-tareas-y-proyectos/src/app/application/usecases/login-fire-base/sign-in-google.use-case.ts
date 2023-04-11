import { Injectable } from '@angular/core';
import { Auth, GoogleAuthProvider,signInWithPopup, UserCredential } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SignInGoogleUseCase {

    constructor(private auth : Auth) { }

    execute():Observable<UserCredential>{
        return from(signInWithPopup(this.auth, new GoogleAuthProvider()))
    }
}