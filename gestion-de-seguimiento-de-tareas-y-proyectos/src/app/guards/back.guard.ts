import { Injectable } from '@angular/core';
import {  CanActivate, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HasUserUseCase } from '../application/usecases/login-fire-base/has-user.use-case';

@Injectable({
  providedIn: 'root'
})
export class BackGuard implements CanActivate {

  constructor(

    private readonly router: Router,
    private readonly hasUserUseCase: HasUserUseCase,
  ) { }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    

    if(!this.hasUserUseCase.execute()){
      return true;
    }

    this.router.navigate([`home/home`]);
    return false;
  }
  
}
