import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tokenUser } from '../../interfaces/data-token-member.interface';

@Injectable({
    providedIn: 'root'
})
export class HasTokenUserUseCase  {
    private helper = new JwtHelperService();

    execute():Observable<tokenUser>{
        const token = localStorage.getItem('token');
        const tokenUser = token ? this.helper.decodeToken(token) : undefined;
        return of(tokenUser);  
    }
}