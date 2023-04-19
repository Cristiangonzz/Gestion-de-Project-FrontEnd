import { Component, OnDestroy, OnInit } from '@angular/core';
import { useCaseProviders } from 'src/app/data/factory';
import { ICollaborationDomainModel } from 'src/app/domain/interfaces/collaboration/collaboration.interface.domain';
import { CollaborationService } from 'src/app/domain/services/collaboration/collaboration.service';

@Component({
  selector: 'app-findAllCollaboration',
  templateUrl: './findall.component.html',
  styleUrls: ['./findall.component.css']
})
export class FindAllCollaborationComponent implements OnInit , OnDestroy{
  provide = useCaseProviders;
  entities?: ICollaborationDomainModel[];
 
 constructor(private readonly service : CollaborationService) { }

  ngOnInit(): void {
   this
    .provide
      .findAllCollaborationUseCaseProvider
        .useFactory(this.service)
          .statusEmmit
            .subscribe({
              next: (value: ICollaborationDomainModel[]) => { this.entities = value; },
              complete: () => { console.log('complete');}
            });
  }
  ngOnDestroy(): void {
    this
    .provide
      .findAllCollaborationUseCaseProvider
        .useFactory(this.service)
          .statusEmmit
            .unsubscribe();
  }

}
