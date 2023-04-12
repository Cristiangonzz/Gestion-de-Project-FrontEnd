import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectService } from 'src/app/domain/services/proyect/proyect.service';
import { IProjectDomainModel } from 'src/app/domain/interfaces/proyect/proyect.interface.domain';
import { IUpdateProjectModel } from 'src/app/domain/interfaces/proyect/update-proyect.interface.domain';

@Injectable({
    providedIn: 'root',
})
export class ProjectImplementationRepository extends ProjectService {
  
    URL = "https://gestion-de-project-backend-production.up.railway.app";

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