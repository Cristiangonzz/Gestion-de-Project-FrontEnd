import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskService } from 'src/domain/services/task/task.service';
import { ITaskDomainModel } from 'src/domain/interfaces/task/task.entity.domain';
import { IUpdateTaskModel } from 'src/domain/interfaces/task/update-task.interface.domain';
import { TeamService } from 'src/domain/services/team/team.service';
import { ITeamDomainModel } from 'src/domain/interfaces/team/team.interface.domain';
import { IUpdateTeamModel } from 'src/domain/interfaces/team/update-team.interface.domain';
import { IAgregateCollaborationOfTeamModel } from 'src/domain/interfaces/collaboration/agregate-collaboration-of-team.dto';
import { IAgregateMemberOfTeamModel } from 'src/domain/interfaces/member/agregate-member-of-team.dto';
import { IAgregateTaskOfTeamModel } from 'src/domain/interfaces/task/agregate-task-of-team.dto';

@Injectable({
    providedIn: 'root',
})
export class TeamImplementationRepository extends TeamService {
   
    
  
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

    register(params:ITeamDomainModel): Observable<ITeamDomainModel> {
       return this.http.post<ITeamDomainModel>(`${this.URL}/team/create`,params,this.httpOptions);
    }

    deleteTeam(data: string): Observable<boolean> {
        return this.http.delete<boolean>(`${this.URL}/team/delete/${data}`,this.httpOptions);
    }
    getTeam(data: string): Observable<ITeamDomainModel> {
        return this.http.get<ITeamDomainModel>(`${this.URL}/team/get/${data}`,this.httpOptions);
    }
    updateTeam(entity: IUpdateTeamModel): Observable<ITeamDomainModel> {
        return this.http.put<ITeamDomainModel>(`${this.URL}/team/update/${entity._id}`,entity,this.httpOptions);
    }

    aggregateTaskOfTeam(params: IAgregateTaskOfTeamModel): Observable<ITeamDomainModel> {
        return this.http.put<ITeamDomainModel>(`${this.URL}/team/aggregate-task/`,params,this.httpOptions);
    }
    aggregateMemberOfTeam(params: IAgregateMemberOfTeamModel): Observable<ITeamDomainModel> {
        return this.http.put<ITeamDomainModel>(`${this.URL}/team/aggregate-member/`,params,this.httpOptions);
    }
    aggregateCollaborationOfTeam(params: IAgregateCollaborationOfTeamModel): Observable<ITeamDomainModel> {
        return this.http.put<ITeamDomainModel>(`${this.URL}/team/aggregate-collaboration/`,params,this.httpOptions);
    }
}