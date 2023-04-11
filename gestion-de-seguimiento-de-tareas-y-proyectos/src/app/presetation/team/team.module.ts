import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingTeamModule } from './routing-team.module';
import { CreateTeamComponent } from './create/create-team.component';
import { UpdateTeamComponent } from './update/update-team.component';
import { DeleteTeamComponent } from './delete/delete-team.component';
import { ListAllTeamComponent } from './list/list-all-team.component';
import { ListOneTeamComponent } from './getOneBy/list-one-team.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AggregateComponent } from './aggregate/aggregate.component';



@NgModule({
  declarations: [
    CreateTeamComponent,
    UpdateTeamComponent,
    DeleteTeamComponent,
    ListAllTeamComponent,
    ListOneTeamComponent,
    AggregateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RoutingTeamModule,
    
    SharedModule,
  ],
  exports: [
    CreateTeamComponent,
    UpdateTeamComponent,
    DeleteTeamComponent,
    ListAllTeamComponent,
    ListOneTeamComponent,
    AggregateComponent,
  ]
})
export class TeamModule { }
