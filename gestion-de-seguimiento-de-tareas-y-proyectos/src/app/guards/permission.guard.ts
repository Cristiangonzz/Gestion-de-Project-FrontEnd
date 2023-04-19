import { Injectable } from '@angular/core';
import {  CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, map, of, switchMap, tap } from 'rxjs';
import { useCaseProviders } from '../data/factory';
import { HasUserUseCase } from '../application/usecases/login-fire-base/has-user.use-case';

@Injectable({
  providedIn: 'root'
})
export class PermissionGuard implements CanActivate {
  provider = useCaseProviders;
  constructor(

    private readonly router: Router,
    private readonly user: HasUserUseCase,

  ) { }
  canActivate(): Observable<boolean>{
    
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
