import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CollaborationService } from '../domain/services/collaboration/collaboration.service';
import { MemberService } from '../domain/services/member/member.service';
import { ProjectService } from '../domain/services/proyect/proyect.service';
import { TaskService } from '../domain/services/task/task.service';
import { TeamService } from '../domain/services/team/team.service';
import { CollaborationImplementationRepository } from './repositories/collaboration/collaboration-implementation.repository';
import { MemberImplementationRepository } from './repositories/member/member-implementation.repository';
import { ProjectImplementationRepository } from './repositories/project/project-implementation.repository';
import { TaskImplementationRepository } from './repositories/task/task-implementation.repository';
import { TeamImplementationRepository } from './repositories/team/team-implementation.repository';
import { useCaseProviders } from './factory';


@NgModule({
    providers: [

        ...Object.values(useCaseProviders),
        { provide: MemberService, useClass: MemberImplementationRepository },
        { provide: TeamService, useClass: TeamImplementationRepository },
        { provide: ProjectService, useClass: ProjectImplementationRepository },
        { provide: TaskService, useClass: TaskImplementationRepository },
        { provide: CollaborationService, useClass: CollaborationImplementationRepository },
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
})
export class DataModule { }