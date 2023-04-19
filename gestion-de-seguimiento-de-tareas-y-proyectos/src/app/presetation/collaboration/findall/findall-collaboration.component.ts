import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FindAllCollaborationUseCase } from 'src/app/application/usecases/collaboration/find-all-collaboration.use-case';
import { useCaseProviders } from 'src/app/data/factory';
import { ICollaborationDomainModel } from 'src/app/domain/interfaces/collaboration/collaboration.interface.domain';
import { CollaborationService } from 'src/app/domain/services/collaboration/collaboration.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-findAllCollaboration',
  templateUrl: './findall-collaboration.component.html',
  styleUrls: ['./findall-collaboration.component.css']
})
export class FindAllCollaborationComponent implements OnInit , OnDestroy{
  provide = useCaseProviders;
  entities?: ICollaborationDomainModel[];
 
 constructor(
  private readonly service : CollaborationService,
  ) { }

  private onDestroy$: Subject<void> = new Subject<void>();

  ngOnInit(): void {
      this.provide.findAllCollaborationUseCaseProvider.useFactory(this.service).execute();

      this
        .provide
          .findAllCollaborationUseCaseProvider
            .useFactory(this.service)
              .statusEmmit
              .pipe(takeUntil(this.onDestroy$))
              .subscribe({
                  next: (value: ICollaborationDomainModel[]) => { this.entities = value; },
                  complete: () => { 
                    console.log('complete');
                    console.log(this.entities);
                  }
              });
  }
  
  ngOnDestroy(): void {
      this.onDestroy$.next();
      this.onDestroy$.complete();
  }

  
 
}
