import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TaskService } from 'src/domain/services/task/task.service';
import { ITaskDomainModel } from 'src/domain/interfaces/task/task.entity.domain';
import { IUpdateTaskModel } from 'src/domain/interfaces/task/update-task.interface.domain';

@Injectable({
    providedIn: 'root',
})
export class TaskImplementationRepository extends TaskService {
  
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

   
    register(params:ITaskDomainModel): Observable<ITaskDomainModel> {
       return this.http.post<ITaskDomainModel>(`${this.URL}/task/create`,params,this.httpOptions);
    }

    deleteTask(data: string): Observable<boolean> {
        return this.http.delete<boolean>(`${this.URL}/task/delete/${data}`,this.httpOptions);
    }
    getTask(data: string): Observable<ITaskDomainModel> {
        return this.http.get<ITaskDomainModel>(`${this.URL}/task/get/${data}`,this.httpOptions);
    }
    updateTask(entity: IUpdateTaskModel): Observable<ITaskDomainModel> {
        return this.http.put<ITaskDomainModel>(`${this.URL}/task/update/${entity._id}`,entity,this.httpOptions);
    }
}