import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CollaborationService } from 'src/domain/services/collaboration/collaboration.service';
import { ICollaborationDomainModel } from 'src/domain/interfaces/collaboration/collaboration.interface.domain';
import { IUpdateCollaborationModel } from 'src/domain/interfaces/collaboration/update-collaboration.interface.domain';

@Injectable({
    providedIn: 'root',
})
export class CollaborationImplementationRepository extends CollaborationService {
  
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

   
    register(params:ICollaborationDomainModel): Observable<ICollaborationDomainModel> {
       return this.http.post<ICollaborationDomainModel>(`${this.URL}/collaboration/create`,params,this.httpOptions);
    }

    deleteCollaboration(data: string): Observable<boolean> {
        return this.http.delete<boolean>(`${this.URL}/collaboration/delete/${data}`,this.httpOptions);
    }
    getCollaboration(data: string): Observable<ICollaborationDomainModel> {
        return this.http.get<ICollaborationDomainModel>(`${this.URL}/collaboration/get/${data}`,this.httpOptions);
    }
    updateCollaboration(entity: IUpdateCollaborationModel): Observable<ICollaborationDomainModel> {
        return this.http.put<ICollaborationDomainModel>(`${this.URL}/collaboration/update/${entity._id}`,entity,this.httpOptions);
    }
}