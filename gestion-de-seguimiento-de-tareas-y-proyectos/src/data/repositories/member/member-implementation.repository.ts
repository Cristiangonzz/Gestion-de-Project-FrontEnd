import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MemberService } from 'src/domain/services/member/member.service';
import { IMemberDomainModel } from 'src/domain/interfaces/member/member.interface.domain';

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
    register(params: {
        name: string,
        document: string,
        salary: string,
        role: string,
        email: string,
        password: string,
    }): Observable<IMemberDomainModel> {
       return this.http.post<IMemberDomainModel>(`${this.URL}/members/signin`, {params});
    }

    signIn(params: { email: string; password: string; }): Observable<IMemberDomainModel> {
        return this.http.post<IMemberDomainModel>(`${this.URL}/member/signin`, {params});
    }
    deleteMember(data: string): Observable<boolean> {
        return this.http.delete<boolean>(`${this.URL}/member/delete/${data}`);
    }
    getMember(data: string): Observable<IMemberDomainModel> {
        return this.http.get<IMemberDomainModel>(`${this.URL}/member/get/${data}`,this.httpOptions);
    }
    updateMember(entity: {_id:string,name: string; document: string; salary: string; role: string; email: string; password: string; }): Observable<IMemberDomainModel> {
        return this.http.put<IMemberDomainModel>(`${this.URL}/member/get/${entity._id}`,{entity});
    }
}