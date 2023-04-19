import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingCollaborationModule } from './routing-collaboration.module';
import { CreateCollaborationComponent } from './create/create-collaboration.component';
import { UpdateCollaborationComponent } from './update/update-collaboration.component';
import { GetOneCollaborationComponent } from './getOneBy/get-one-collaboration.component';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataModule } from 'src/app/data/data.module';
import { FindAllCollaborationComponent } from './findall/findall-collaboration.component';



@NgModule({
  declarations: [
  CreateCollaborationComponent,
  UpdateCollaborationComponent,
  GetOneCollaborationComponent,
  FindAllCollaborationComponent,


  ],
  imports: [
    DataModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,



    RoutingCollaborationModule,
    SharedModule,
  ],
  exports: [
    CreateCollaborationComponent,
    UpdateCollaborationComponent,
    GetOneCollaborationComponent,
    FindAllCollaborationComponent,

  ]
})
export class CollaborationModule { }
