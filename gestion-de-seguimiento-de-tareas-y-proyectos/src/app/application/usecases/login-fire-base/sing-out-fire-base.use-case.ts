import { Injectable } from '@angular/core';
import { Auth,signOut } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SingOutFireBaseUseCase {

    constructor(private auth : Auth) { }

    execute():Observable<void>{
        return from(signOut(this.auth))
    }
}