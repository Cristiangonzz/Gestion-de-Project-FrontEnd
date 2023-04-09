import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingCollaborationModule } from './routing-collaboration.module';
import { CreateCollaborationComponent } from './create/create-collaboration.component';
import { UpdateCollaborationComponent } from './update/update-collaboration.component';
import { GetOneCollaborationComponent } from './getOneBy/get-one-collaboration.component';
import { DeleteCollaborationComponent } from './delete/delete-collaboration.component';
import { ListAllCollaborationComponent } from './list/list-collaboration.component';



@NgModule({
  declarations: [
  CreateCollaborationComponent,
  UpdateCollaborationComponent,
  GetOneCollaborationComponent,
  DeleteCollaborationComponent, 
  ListAllCollaborationComponent,   

  ],
  imports: [
    CommonModule,
    RoutingCollaborationModule,
  ],
  exports: [
    CreateCollaborationComponent,
    UpdateCollaborationComponent,
    GetOneCollaborationComponent,
    DeleteCollaborationComponent,
    ListAllCollaborationComponent,
  ]
})
export class CollaborationModule { }
