import { Injectable } from '@angular/core';
import {  CanActivate, Router, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { useCaseProviders } from '../data/factory';

@Injectable({
  providedIn: 'root'
})
export class BackGuard implements CanActivate {
  provider = useCaseProviders;
  constructor(
    private readonly router: Router,

  ) { }
  canActivate(): Observable<boolean>  {
    
     return this.provider.hasUserUseCaseProvider.useFactory().execute()
     .pipe(map((status: boolean) => {
       if (status) {
        this.router.navigate([`home/home`]);
         return false;
       } else {
         
         return true;
       }
     }));
    
  }
  
}