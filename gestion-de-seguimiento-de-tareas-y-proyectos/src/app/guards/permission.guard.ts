import { Injectable } from '@angular/core';
import {  CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { HasUserUseCase } from '../application/usecases/login-fire-base/has-user.use-case';
import { useCaseProviders } from '../data/factory';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  provider = useCaseProviders;
  constructor(

    private readonly router: Router,
    private readonly hasUserUseCase: HasUserUseCase,
  ) { }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      return this
               .provider
                 .hasUserUseCaseProvider
                   .useFactory()
                     .execute()
                       .pipe(map((status: boolean) => {
                         if (status) {
                           return true;
                         } else {
                           this.router.navigate([`login/sign-in`]);
                           return false;
                         }
                       }));


  
  }
  
}
 //  if(this.provider.hasUserUseCaseProvider.useFactory().execute()){
    //    return true;
    //  }

    //  this.router.navigate([`login/sign-in`]);
    //  return false;
