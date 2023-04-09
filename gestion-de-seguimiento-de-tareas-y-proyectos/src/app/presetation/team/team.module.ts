import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoutingTeamModule } from './routing-team.module';
import { CreateTeamComponent } from './create/create-team.component';
import { UpdateTeamComponent } from './update/update-team.component';
import { DeleteTeamComponent } from './delete/delete-team.component';
import { ListAllTeamComponent } from './list/list-all-team.component';
import { ListOneTeamComponent } from './getOneBy/list-one-team.component';



@NgModule({
  declarations: [
    CreateTeamComponent,
    UpdateTeamComponent,
    DeleteTeamComponent,
    ListAllTeamComponent,
    ListOneTeamComponent,
  ],
  imports: [
    CommonModule,
    RoutingTeamModule,
  ],
  exports: [
    CreateTeamComponent,
    UpdateTeamComponent,
    DeleteTeamComponent,
    ListAllTeamComponent,
    ListOneTeamComponent,
  ]
})
export class TeamModule { }
