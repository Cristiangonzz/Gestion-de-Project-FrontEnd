import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CollaborationService } from 'src/domain/services/collaboration/collaboration.service';
import { ICollaborationDomainModel } from 'src/domain/interfaces/collaboration/collaboration.interface.domain';
import { IUpdateCollaborationModel } from 'src/domain/interfaces/collaboration/update-collaboration.interface.domain';
import { ProjectService } from 'src/domain/services/proyect/proyect.service';
import { IProjectDomainModel } from 'src/domain/interfaces/proyect/proyect.interface.domain';
import { IUpdateProjectModel } from 'src/domain/interfaces/proyect/update-proyect.interface.domain';

@Injectable({
    providedIn: 'root',
})
export class ProjectImplementationRepository extends ProjectService {
  
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

   
    register(params:IProjectDomainModel): Observable<IProjectDomainModel> {
       return this.http.post<IProjectDomainModel>(`${this.URL}/project/create`,params,this.httpOptions);
    }

    deleteProject(data: string): Observable<boolean> {
        return this.http.delete<boolean>(`${this.URL}/project/delete/${data}`,this.httpOptions);
    }
    getProject(data: string): Observable<IProjectDomainModel> {
        return this.http.get<IProjectDomainModel>(`${this.URL}/project/get/${data}`,this.httpOptions);
    }
    updateProject(entity: IUpdateProjectModel): Observable<IProjectDomainModel> {
        return this.http.put<IProjectDomainModel>(`${this.URL}/project/update/${entity._id}`,entity,this.httpOptions);
    }
}