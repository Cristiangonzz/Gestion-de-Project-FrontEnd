import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MemberService } from 'src/domain/services/member/member.service';
import { SingInMemberUseCase } from 'src/application/usecases/member/sing-in-member.usecase';
import { RegisterMemberUseCase } from 'src/application/usecases/member/register-member.usecase';
import { GetMemberUseCase } from 'src/application/usecases/member/get-member.usecase';
import { MemberImplementationRepository } from './repositories/member/member-implementation.repository';
import { UpdateMemberUseCase } from 'src/application/usecases/member/update-member.usecase';
import { RegisterCollaborationUseCase } from 'src/application/usecases/collaboration/register-collaboration.usecase';
import { CollaborationService } from 'src/domain/services/collaboration/collaboration.service';
import { GetCollaborationUseCase } from 'src/application/usecases/collaboration/get-collaboration.usecase';
import { UpdateCollaborationUseCase } from 'src/application/usecases/collaboration/update-collaboration.usecase';
import { DeleteCollaborationUseCase } from 'src/application/usecases/collaboration/delete-collaboration.usecase';
import { DeleteMemberUseCase } from 'src/application/usecases/member/delete-member.usecase';
import { DeleteProjectUseCase } from 'src/application/usecases/proyect/delete-project.usecase';
import { GetProjectUseCase } from 'src/application/usecases/proyect/get-project.usecase';
import { RegisterProjectUseCase } from 'src/application/usecases/proyect/register-project.usecase';
import { UpdateProjectUseCase } from 'src/application/usecases/proyect/update-project.usecase';
import { ProjectService } from 'src/domain/services/proyect/proyect.service';
import { DeleteTaskUseCase } from 'src/application/usecases/task/delete-task.usecase';
import { GetTaskUseCase } from 'src/application/usecases/task/get-task.usecase';
import { RegisterTaskUseCase } from 'src/application/usecases/task/register-task.usecase';
import { UpdateTaskUseCase } from 'src/application/usecases/task/update-task.usecase';
import { TaskService } from 'src/domain/services/task/task.service';
import { DeleteTeamUseCase } from 'src/application/usecases/team/delete-team.usecase';
import { GetTeamUseCase } from 'src/application/usecases/team/get-team.usecase';
import { RegisterTeamUseCase } from 'src/application/usecases/team/register-team.usecase';
import { UpdateTeamUseCase } from 'src/application/usecases/team/update-team.usecase';
import { TeamService } from 'src/domain/services/team/team.service';
import { AggregateTaskOfTeamUseCase } from 'src/application/usecases/team/aggregate-task-team.usecase';
import { AggregateCollaborationOfTeamUseCase } from 'src/application/usecases/team/aggregate-collaboration-team.usecase';
import { AggregateMemberOfTeamUseCase } from 'src/application/usecases/team/aggregate-member-team.usecase';
import { TeamImplementationRepository } from './repositories/team/team-implementation.repository';
import { ProjectImplementationRepository } from './repositories/project/project-implementation.repository';
import { TaskImplementationRepository } from './repositories/task/task-implementation.repository';
import { CollaborationImplementationRepository } from './repositories/collaboration/collaboration-implementation.repository';


//collaborationconst 
const RegisterCollaborationUseCaseFactory = (collaborationService: CollaborationService) => new RegisterCollaborationUseCase(collaborationService);
export const registerCollaborationUseCaseProvider = {
    provide: RegisterCollaborationUseCase,
    useFactory: RegisterCollaborationUseCaseFactory,
    deps: [CollaborationService],
};

const GetCollaborationUseCaseFactory = (collaborationService: CollaborationService) => new GetCollaborationUseCase(collaborationService);
export const getCollaborationUseCaseProvider = {
    provide: GetCollaborationUseCase,
    useFactory: GetCollaborationUseCaseFactory,
    deps: [CollaborationService],
};

const UpdateCollaborationUseCaseFactory = (collaborationService: CollaborationService) => new UpdateCollaborationUseCase(collaborationService);
export const updateCollaborationUseCaseProvider = {
    provide: UpdateCollaborationUseCase,
    useFactory: UpdateCollaborationUseCaseFactory,
    deps: [CollaborationService],
};
const DeleteCollaborationUseCaseFactory = (collaborationService: CollaborationService) => new DeleteCollaborationUseCase(collaborationService);
export const deleteCollaborationUseCaseProvider = {
    provide: UpdateCollaborationUseCase,
    useFactory: DeleteCollaborationUseCaseFactory,
    deps: [CollaborationService],
};
// project

const RegisterProjectUseCaseFactory = (projectService: ProjectService) => new RegisterProjectUseCase(projectService);
export const registerProjectUseCaseProvider = {
    provide: RegisterProjectUseCase,
    useFactory: RegisterProjectUseCaseFactory,
    deps: [ProjectService],
};

const GetProjectUseCaseFactory = (projectService: ProjectService) => new GetProjectUseCase(projectService);
export const getProjectUseCaseProvider = {
    provide: GetProjectUseCase,
    useFactory: GetProjectUseCaseFactory,
    deps: [ProjectService],
};

const UpdateProjectUseCaseFactory = (projectService: ProjectService) => new UpdateProjectUseCase(projectService);
export const updateProjectUseCaseProvider = {
    provide: UpdateProjectUseCase,
    useFactory: UpdateProjectUseCaseFactory,
    deps: [ProjectService],
};
const DeleteProjectUseCaseFactory = (projectService: ProjectService) => new DeleteProjectUseCase(projectService);
export const deleteProjectUseCaseProvider = {
    provide: UpdateProjectUseCase,
    useFactory: DeleteProjectUseCaseFactory,
    deps: [ProjectService],
};
//task

const RegisterTaskUseCaseFactory = (taskService: TaskService) => new RegisterTaskUseCase(taskService);
export const registerTaskUseCaseProvider = {
    provide: RegisterTaskUseCase,
    useFactory: RegisterTaskUseCaseFactory,
    deps: [TaskService],
};

const GetTaskUseCaseFactory = (taskService: TaskService) => new GetTaskUseCase(taskService);
export const getTaskUseCaseProvider = {
    provide: GetTaskUseCase,
    useFactory: GetTaskUseCaseFactory,
    deps: [TaskService],
};

const UpdateTaskUseCaseFactory = (taskService: TaskService) => new UpdateTaskUseCase(taskService);
export const updateTaskUseCaseProvider = {
    provide: UpdateTaskUseCase,
    useFactory: UpdateTaskUseCaseFactory,
    deps: [TaskService],
};
const DeleteTaskUseCaseFactory = (taskService: TaskService) => new DeleteTaskUseCase(taskService);
export const deleteTaskUseCaseProvider = {
    provide: UpdateTaskUseCase,
    useFactory: DeleteTaskUseCaseFactory,
    deps: [TaskService],
};



//team

const RegisterTeamUseCaseFactory = (teamService: TeamService) => new RegisterTeamUseCase(teamService);
export const registerTeamUseCaseProvider = {
    provide: RegisterTeamUseCase,
    useFactory: RegisterTeamUseCaseFactory,
    deps: [TeamService],
};

const GetTeamUseCaseFactory = (teamService: TeamService) => new GetTeamUseCase(teamService);
export const getTeamUseCaseProvider = {
    provide: GetTeamUseCase,
    useFactory: GetTeamUseCaseFactory,
    deps: [TeamService],
};

const UpdateTeamUseCaseFactory = (teamService: TeamService) => new UpdateTeamUseCase(teamService);
export const updateTeamUseCaseProvider = {
    provide: UpdateTeamUseCase,
    useFactory: UpdateTeamUseCaseFactory,
    deps: [TeamService],
};
const DeleteTeamUseCaseFactory = (teamService: TeamService) => new DeleteTeamUseCase(teamService);
export const deleteTeamUseCaseProvider = {
    provide: UpdateTeamUseCase,
    useFactory: DeleteTeamUseCaseFactory,
    deps: [TeamService],
};

const AggregateTaskOfTeamUseCaseFactory = (teamService: TeamService) => new AggregateTaskOfTeamUseCase(teamService);
export const aggregateTaskOfTeamUseCaseProvider = {
    provide: UpdateTeamUseCase,
    useFactory: AggregateTaskOfTeamUseCaseFactory,
    deps: [TeamService],
};

const AggregateCollaborationOfTeamUseCaseFactory = (teamService: TeamService) => new AggregateCollaborationOfTeamUseCase(teamService);
export const aggregateCollaborationOfTeamUseCaseProvider = {
    provide: UpdateTeamUseCase,
    useFactory: AggregateCollaborationOfTeamUseCaseFactory,
    deps: [TeamService],
};

const AggregateMemberOfTeamUseCaseFactory = (teamService: TeamService) => new AggregateMemberOfTeamUseCase(teamService);
export const aggregateMemberOfTeamUseCaseProvider = {
    provide: UpdateTeamUseCase,
    useFactory: AggregateMemberOfTeamUseCaseFactory,
    deps: [TeamService],
};

//Member
const SignInMemberUseCaseFactory = (memberService: MemberService) => new SingInMemberUseCase(memberService);
export const signInMemberUseCaseProvider = {
    provide: SingInMemberUseCase,
    useFactory: SignInMemberUseCaseFactory,
    deps: [MemberService],
};

const RegisterMemberUseCaseFactory = (memberService: MemberService) => new RegisterMemberUseCase(memberService);
export const registerMemberUseCaseProvider = {
    provide: RegisterMemberUseCase,
    useFactory: RegisterMemberUseCaseFactory,
    deps: [MemberService],
};

const GetMemberUseCaseFactory = (memberService: MemberService) => new GetMemberUseCase(memberService);
export const getMemberUseCaseProvider = {
    provide: GetMemberUseCase,
    useFactory: GetMemberUseCaseFactory,
    deps: [MemberService],
};

const UpdateMemberUseCaseFactory = (memberService: MemberService) => new UpdateMemberUseCase(memberService);
export const updateMemberUseCaseProvider = {
    provide: UpdateMemberUseCase,
    useFactory: UpdateMemberUseCaseFactory,
    deps: [MemberService],
};
const DeleteMemberUseCaseFactory = (membernService: MemberService) => new DeleteMemberUseCase(membernService);
export const deleteMembernUseCaseProvider = {
    provide: UpdateMemberUseCase,
    useFactory: DeleteMemberUseCaseFactory,
    deps: [MemberService],
};

@NgModule({
    providers: [

        //Member
        signInMemberUseCaseProvider,
        registerMemberUseCaseProvider,
        getMemberUseCaseProvider,
        updateMemberUseCaseProvider,
        deleteMembernUseCaseProvider,

        //Team
        registerTeamUseCaseProvider,
        getTeamUseCaseProvider,
        updateTeamUseCaseProvider,
        deleteTeamUseCaseProvider,
        aggregateMemberOfTeamUseCaseProvider,
        aggregateCollaborationOfTeamUseCaseProvider,
        aggregateTaskOfTeamUseCaseProvider,

        //Task
        registerTaskUseCaseProvider,
        getTaskUseCaseProvider,
        updateTaskUseCaseProvider,
        deleteTaskUseCaseProvider,
        //Collaboration

        registerCollaborationUseCaseProvider,
        getCollaborationUseCaseProvider,
        updateCollaborationUseCaseProvider,
        deleteCollaborationUseCaseProvider,
        
        //Project
        registerProjectUseCaseProvider,
        getProjectUseCaseProvider,
        updateProjectUseCaseProvider,
        deleteProjectUseCaseProvider,
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