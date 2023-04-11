import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MemberService } from 'src/app/domain/services/member/member.service';
import { IMemberDomainModel } from 'src/app/domain/interfaces/member/member.interface.domain';
import { IUpdateMemberModel } from 'src/app/domain/interfaces/member/update-member.interface.domain';
import { IRegisterMemberDomainModel } from 'src/app/domain/interfaces/member/register-member.interface.domain';
import { SignInModel } from 'src/app/domain/interfaces/member/singin.member.domain.interfaces';

@Injectable({
    providedIn: 'root',
})
export class MemberImplementationRepository extends MemberService {
  
    URL = "http://localhost:3000";

    constructor(private http: HttpClient) {
        super();
    }

    httpOptions = {
        headers : new HttpHeaders({
          //'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
          'Access-Control-Allow-Origin': '*'
        })
    }

    signIn(params:SignInModel): Observable<string> {
        return this.http.post(`${this.URL}/member/signIn`,params,{responseType: 'text'});
    }
    
    register(params:IRegisterMemberDomainModel): Observable<IMemberDomainModel> {
       return this.http.post<IMemberDomainModel>(`${this.URL}/member/create`,params,this.httpOptions);
    }

    deleteMember(data: string): Observable<boolean> {
        return this.http.delete<boolean>(`${this.URL}/member/delete/${data}`,this.httpOptions);
    }

    getMember(data: string): Observable<IMemberDomainModel> {
        return this.http.get<IMemberDomainModel>(`${this.URL}/member/get/${data}`,this.httpOptions);
    }
    
    updateMember(entity: IUpdateMemberModel): Observable<IMemberDomainModel> {
        return this.http.put<IMemberDomainModel>(`${this.URL}/member/update/${entity._id}`,entity,this.httpOptions);
    }
}