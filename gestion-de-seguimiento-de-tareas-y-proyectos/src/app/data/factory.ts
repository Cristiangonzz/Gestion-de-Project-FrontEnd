import { GetMemberUseCase } from 'src/app/application/usecases/member/get-member.usecase';
import { UpdateMemberUseCase } from 'src/app/application/usecases/member/update-member.usecase';
import { RegisterCollaborationUseCase } from 'src/app/application/usecases/collaboration/register-collaboration.usecase';
import { CollaborationService } from 'src/app/domain/services/collaboration/collaboration.service';
import { GetCollaborationUseCase } from 'src/app/application/usecases/collaboration/get-collaboration.usecase';
import { UpdateCollaborationUseCase } from 'src/app/application/usecases/collaboration/update-collaboration.usecase';
import { DeleteCollaborationUseCase } from 'src/app/application/usecases/collaboration/delete-collaboration.usecase';
import { DeleteMemberUseCase } from 'src/app/application/usecases/member/delete-member.usecase';
import { DeleteProjectUseCase } from 'src/app/application/usecases/proyect/delete-project.usecase';
import { GetProjectUseCase } from 'src/app/application/usecases/proyect/get-project.usecase';
import { RegisterProjectUseCase } from 'src/app/application/usecases/proyect/register-project.usecase';
import { UpdateProjectUseCase } from 'src/app/application/usecases/proyect/update-project.usecase';
import { ProjectService } from 'src/app/domain/services/proyect/proyect.service';
import { DeleteTaskUseCase } from 'src/app/application/usecases/task/delete-task.usecase';
import { GetTaskUseCase } from 'src/app/application/usecases/task/get-task.usecase';
import { RegisterTaskUseCase } from 'src/app/application/usecases/task/register-task.usecase';
import { UpdateTaskUseCase } from 'src/app/application/usecases/task/update-task.usecase';
import { TaskService } from 'src/app/domain/services/task/task.service';
import { DeleteTeamUseCase } from 'src/app/application/usecases/team/delete-team.usecase';
import { GetTeamUseCase } from 'src/app/application/usecases/team/get-team.usecase';
import { RegisterTeamUseCase } from 'src/app/application/usecases/team/register-team.usecase';
import { UpdateTeamUseCase } from 'src/app/application/usecases/team/update-team.usecase';
import { TeamService } from 'src/app/domain/services/team/team.service';
import { AggregateTaskOfTeamUseCase } from 'src/app/application/usecases/team/aggregate-task-team.usecase';
import { AggregateCollaborationOfTeamUseCase } from 'src/app/application/usecases/team/aggregate-collaboration-team.usecase';
import { AggregateMemberOfTeamUseCase } from 'src/app/application/usecases/team/aggregate-member-team.usecase';
import { MemberService } from '../domain/services/member/member.service';
import { SingInMemberUseCase } from '../application/usecases/member/sing-in-member.usecase';
import { RegisterMemberUseCase } from '../application/usecases/member/register-member.usecase';
import { HasUserUseCase } from '../application/usecases/login-fire-base/has-user.use-case';

//collaborationconst 
const RegisterCollaborationUseCaseFactory = (collaborationService: CollaborationService) => new RegisterCollaborationUseCase(collaborationService);
const GetCollaborationUseCaseFactory = (collaborationService: CollaborationService) => new GetCollaborationUseCase(collaborationService);
const UpdateCollaborationUseCaseFactory = (collaborationService: CollaborationService) => new UpdateCollaborationUseCase(collaborationService);
const DeleteCollaborationUseCaseFactory = (collaborationService: CollaborationService) => new DeleteCollaborationUseCase(collaborationService);

// project
const RegisterProjectUseCaseFactory = (projectService: ProjectService) => new RegisterProjectUseCase(projectService);
const GetProjectUseCaseFactory = (projectService: ProjectService) => new GetProjectUseCase(projectService);
const UpdateProjectUseCaseFactory = (projectService: ProjectService) => new UpdateProjectUseCase(projectService);
const DeleteProjectUseCaseFactory = (projectService: ProjectService) => new DeleteProjectUseCase(projectService);

//task
const RegisterTaskUseCaseFactory = (taskService: TaskService) => new RegisterTaskUseCase(taskService);
const GetTaskUseCaseFactory = (taskService: TaskService) => new GetTaskUseCase(taskService);
const UpdateTaskUseCaseFactory = (taskService: TaskService) => new UpdateTaskUseCase(taskService);
const DeleteTaskUseCaseFactory = (taskService: TaskService) => new DeleteTaskUseCase(taskService);

//team
const RegisterTeamUseCaseFactory = (teamService: TeamService) => new RegisterTeamUseCase(teamService);
const GetTeamUseCaseFactory = (teamService: TeamService) => new GetTeamUseCase(teamService);
const UpdateTeamUseCaseFactory = (teamService: TeamService) => new UpdateTeamUseCase(teamService);
const DeleteTeamUseCaseFactory = (teamService: TeamService) => new DeleteTeamUseCase(teamService);
const AggregateTaskOfTeamUseCaseFactory = (teamService: TeamService) => new AggregateTaskOfTeamUseCase(teamService);
const AggregateCollaborationOfTeamUseCaseFactory = (teamService: TeamService) => new AggregateCollaborationOfTeamUseCase(teamService);
const AggregateMemberOfTeamUseCaseFactory = (teamService: TeamService) => new AggregateMemberOfTeamUseCase(teamService);

//Member
const SignInMemberUseCaseFactory = (memberService: MemberService) => new SingInMemberUseCase(memberService);
const GetMemberUseCaseFactory = (memberService: MemberService) => new GetMemberUseCase(memberService);
const UpdateMemberUseCaseFactory = (memberService: MemberService) => new UpdateMemberUseCase(memberService);
const DeleteMemberUseCaseFactory = (memberService: MemberService) => new DeleteMemberUseCase(memberService);
const RegisterMemberUseCaseFactory = (memberService: MemberService) => new RegisterMemberUseCase(memberService);


//Autentication
const HasUserUseCaseFactory = () => new HasUserUseCase();

export const useCaseProviders = {

    hasUserUseCaseProvider : {
        provide: HasUserUseCase,
        useFactory: HasUserUseCaseFactory,
    },
    registerMemberUseCaseProvider : 
    {
        provide: RegisterMemberUseCase,
        useFactory: RegisterMemberUseCaseFactory,
        deps: [MemberService],
    },
    deleteMembernUseCaseProvider : {
        provide: UpdateMemberUseCase,
        useFactory: DeleteMemberUseCaseFactory,
        deps: [MemberService],
    },
    updateMemberUseCaseProvider : {
        provide: UpdateMemberUseCase,
        useFactory: UpdateMemberUseCaseFactory,
        deps: [MemberService],
    },
    getMemberUseCaseProvider : {
        provide: GetMemberUseCase,
        useFactory: GetMemberUseCaseFactory,
        deps: [MemberService],
    },
    signInMemberUseCaseProvider : {
        provide: SingInMemberUseCase,
        useFactory: SignInMemberUseCaseFactory,
        deps: [MemberService],
    },
    aggregateMemberOfTeamUseCaseProvider : {
        provide: UpdateTeamUseCase,
        useFactory: AggregateMemberOfTeamUseCaseFactory,
        deps: [TeamService],
    },
    aggregateCollaborationOfTeamUseCaseProvider : {
        provide: UpdateTeamUseCase,
        useFactory: AggregateCollaborationOfTeamUseCaseFactory,
        deps: [TeamService],
    },
    aggregateTaskOfTeamUseCaseProvider : {
        provide: UpdateTeamUseCase,
        useFactory: AggregateTaskOfTeamUseCaseFactory,
        deps: [TeamService],
    },
    deleteTeamUseCaseProvider : {
        provide: UpdateTeamUseCase,
        useFactory: DeleteTeamUseCaseFactory,
        deps: [TeamService],
    },
    updateTeamUseCaseProvider : {
        provide: UpdateTeamUseCase,
        useFactory: UpdateTeamUseCaseFactory,
        deps: [TeamService],
    },
    getTeamUseCaseProvider : {
        provide: GetTeamUseCase,
        useFactory: GetTeamUseCaseFactory,
        deps: [TeamService],
    },
    registerTeamUseCaseProvider : {
        provide: RegisterTeamUseCase,
        useFactory: RegisterTeamUseCaseFactory,
        deps: [TeamService],
    },
    deleteTaskUseCaseProvider : {
        provide: UpdateTaskUseCase,
        useFactory: DeleteTaskUseCaseFactory,
        deps: [TaskService],
    },
    updateTaskUseCaseProvider : {
        provide: UpdateTaskUseCase,
        useFactory: UpdateTaskUseCaseFactory,
        deps: [TaskService],
    },
    getTaskUseCaseProvider : {
        provide: GetTaskUseCase,
        useFactory: GetTaskUseCaseFactory,
        deps: [TaskService],
    },
    registerTaskUseCaseProvider : {
        provide: RegisterTaskUseCase,
        useFactory: RegisterTaskUseCaseFactory,
        deps: [TaskService],
    },
    deleteProjectUseCaseProvider : {
        provide: UpdateProjectUseCase,
        useFactory: DeleteProjectUseCaseFactory,
        deps: [ProjectService],
    },
    updateProjectUseCaseProvider : {
        provide: UpdateProjectUseCase,
        useFactory: UpdateProjectUseCaseFactory,
        deps: [ProjectService],
    },
    getProjectUseCaseProvider : {
        provide: GetProjectUseCase,
        useFactory: GetProjectUseCaseFactory,
        deps: [ProjectService],
    },
    registerProjectUseCaseProvider : {
        provide: RegisterProjectUseCase,
        useFactory: RegisterProjectUseCaseFactory,
        deps: [ProjectService],
    },
    deleteCollaborationUseCaseProvider : {
        provide: UpdateCollaborationUseCase,
        useFactory: DeleteCollaborationUseCaseFactory,
        deps: [CollaborationService],
    },
    updateCollaborationUseCaseProvider : {
        provide: UpdateCollaborationUseCase,
        useFactory: UpdateCollaborationUseCaseFactory,
        deps: [CollaborationService],
    },
    getCollaborationUseCaseProvider : {
        provide: GetCollaborationUseCase,
        useFactory: GetCollaborationUseCaseFactory,
        deps: [CollaborationService],
    },
    registerCollaborationUseCaseProvider : {
        provide: RegisterCollaborationUseCase,
        useFactory: RegisterCollaborationUseCaseFactory,
        deps: [CollaborationService],
    },
}