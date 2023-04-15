import { Component, OnInit } from '@angular/core';
import { useCaseProviders } from 'src/app/data/factory';
import { TaskService } from 'src/app/domain/services/task/task.service';

@Component({
  selector: 'app-list-all-task',
  templateUrl: './list-all-task.component.html',
  styleUrls: ['./list-all-task.component.css']
})
export class ListAllTaskComponent implements OnInit{
 
  provider =  useCaseProviders;
  constructor(
      private readonly service : TaskService
  ) { }

  ngOnInit(): void {
    this.funcionAlgo();
  }

  funcionAlgo(){
    this.provider.getTaskUseCaseProvider.useFactory(this.service).execute("1");
  }

}
