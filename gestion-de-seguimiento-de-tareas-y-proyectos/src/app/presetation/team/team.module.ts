import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingTeamModule } from './routing-team.module';
import { CreateTeamComponent } from './create/create-team.component';
import { UpdateTeamComponent } from './update/update-team.component';
import { ListOneTeamComponent } from './getOneBy/list-one-team.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AggregateComponent } from './aggregate/aggregate.component';
import { DataModule } from 'src/app/data/data.module';



@NgModule({
  declarations: [
    CreateTeamComponent,
    UpdateTeamComponent,

    ListOneTeamComponent,
    AggregateComponent,
  ],
  imports: [
    DataModule,
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
    ListOneTeamComponent,
    AggregateComponent,
  ]
})
export class TeamModule { }
