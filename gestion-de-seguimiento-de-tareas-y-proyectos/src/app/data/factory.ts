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
import { GetEmailMemberUseCase } from '../application/usecases/member/get-email-member.usecase';
import { HasUserTokenDecodeUseCase } from '../application/usecases/login-fire-base/get-token-local-storage.use-case';
import { SignInFireBaseUseCase } from '../application/usecases/login-fire-base/sign-in-fire-base.use-case';
import { Auth } from '@angular/fire/auth';
import { SignUpFireBaseUseCase } from '../application/usecases/login-fire-base/sign-up-fire-base.use-case';
import { SignInGoogleUseCase } from '../application/usecases/login-fire-base/sign-in-google.use-case';

//collaborationconst 
const RegisterCollaborationUseCaseFactory = 
(() => {
    let instance: RegisterCollaborationUseCase;
  
    const factory = (collaborationService: CollaborationService): RegisterCollaborationUseCase => {
      if (!instance) {
        instance = new RegisterCollaborationUseCase(collaborationService);
      }
  
      return instance;
    };
  
    return factory;
})();

const GetCollaborationUseCaseFactory = 
(() => {
    let instance: GetCollaborationUseCase;
  
    const factory = (collaborationService: CollaborationService): GetCollaborationUseCase => {
      if (!instance) {
        instance = new GetCollaborationUseCase(collaborationService);
      }
  
      return instance;
    };
  
    return factory;
})();
const UpdateCollaborationUseCaseFactory =
(() => {
    let instance: UpdateCollaborationUseCase;
  
    const factory = (collaborationService: CollaborationService): UpdateCollaborationUseCase => {
      if (!instance) {
        instance = new UpdateCollaborationUseCase(collaborationService);
      }
  
      return instance;
    };
  
    return factory;
})();
const DeleteCollaborationUseCaseFactory = 
(() => {
    let instance: DeleteCollaborationUseCase;
  
    const factory = (collaborationService: CollaborationService): DeleteCollaborationUseCase => {
      if (!instance) {
        instance = new DeleteCollaborationUseCase(collaborationService);
      }
  
      return instance;
    };
  
    return factory;
})();
// project
const RegisterProjectUseCaseFactory = 
(() => {
    let instance: RegisterProjectUseCase;
  
    const factory = (projectService: ProjectService): RegisterProjectUseCase => {
      if (!instance) {
        instance = new RegisterProjectUseCase(projectService);
      }
  
      return instance;
    };
  
    return factory;
})();
const GetProjectUseCaseFactory = 
(() => {
    let instance: GetProjectUseCase;
  
    const factory = (projectService: ProjectService): GetProjectUseCase => {
      if (!instance) {
        instance = new GetProjectUseCase(projectService);
      }
  
      return instance;
    };
  
    return factory;
})();
const UpdateProjectUseCaseFactory = (projectService: ProjectService) => new UpdateProjectUseCase(projectService);

const DeleteProjectUseCaseFactory = 
(() => {
    let instance: DeleteProjectUseCase;
  
    const factory = (projectService: ProjectService): DeleteProjectUseCase => {
      if (!instance) {
        instance = new DeleteProjectUseCase(projectService);
      }
  
      return instance;
    };
  
    return factory;
})();
//task
const RegisterTaskUseCaseFactory = 
(() => {
    let instance: RegisterTaskUseCase;
  
    const factory = (taskService: TaskService): RegisterTaskUseCase => {
      if (!instance) {
        instance = new RegisterTaskUseCase(taskService);
      }
  
      return instance;
    };
  
    return factory;
})();
const GetTaskUseCaseFactory = 
(() => {
    let instance: GetTaskUseCase;
  
    const factory = (taskService: TaskService): GetTaskUseCase => {
      if (!instance) {
        instance = new GetTaskUseCase(taskService);
      }
  
      return instance;
    };
  
    return factory;
})();
const UpdateTaskUseCaseFactory = 
(() => {
    let instance: UpdateTaskUseCase;
  
    const factory = (taskService: TaskService): UpdateTaskUseCase => {
      if (!instance) {
        instance = new UpdateTaskUseCase(taskService);
      }
  
      return instance;
    };
  
    return factory;
})();
const DeleteTaskUseCaseFactory =
(() => {
    let instance: DeleteTaskUseCase;
  
    const factory = (taskService: TaskService): DeleteTaskUseCase => {
      if (!instance) {
        instance = new DeleteTaskUseCase(taskService);
      }
  
      return instance;
    };
  
    return factory;
})();
//team
const RegisterTeamUseCaseFactory = 
(() => {
    let instance: RegisterTeamUseCase;
  
    const factory = (teamService: TeamService): RegisterTeamUseCase => {
      if (!instance) {
        instance = new RegisterTeamUseCase(teamService);
      }
  
      return instance;
    };
  
    return factory;
})();


const GetTeamUseCaseFactory = 
(() => {
    let instance: GetTeamUseCase;
  
    const factory = (teamService: TeamService): GetTeamUseCase => {
      if (!instance) {
        instance = new GetTeamUseCase(teamService);
      }
  
      return instance;
    };
  
    return factory;
})();


const UpdateTeamUseCaseFactory = 
(() => {
    let instance: UpdateTeamUseCase;
  
    const factory = (teamService: TeamService): UpdateTeamUseCase => {
      if (!instance) {
        instance = new UpdateTeamUseCase(teamService);
      }
  
      return instance;
    };
  
    return factory;
})();


const DeleteTeamUseCaseFactory = 
(() => {
    let instance: DeleteTeamUseCase;
  
    const factory = (teamService: TeamService): DeleteTeamUseCase => {
      if (!instance) {
        instance = new DeleteTeamUseCase(teamService);
      }
  
      return instance;
    };
  
    return factory;
})();


const AggregateTaskOfTeamUseCaseFactory = 
(() => {
    let instance: AggregateTaskOfTeamUseCase;
  
    const factory = (teamService: TeamService): AggregateTaskOfTeamUseCase => {
      if (!instance) {
        instance = new AggregateTaskOfTeamUseCase(teamService);
      }
  
      return instance;
    };
  
    return factory;
})();



const AggregateCollaborationOfTeamUseCaseFactory = (teamService: TeamService) => new AggregateCollaborationOfTeamUseCase(teamService);
(() => {
    let instance: AggregateMemberOfTeamUseCase;
  
    const factory = (teamService: TeamService): AggregateMemberOfTeamUseCase => {
      if (!instance) {
        instance = new AggregateMemberOfTeamUseCase(teamService);
      }
  
      return instance;
    };
  
    return factory;
})();

const AggregateMemberOfTeamUseCaseFactory = 
(() => {
    let instance: AggregateMemberOfTeamUseCase;
  
    const factory = (teamService: TeamService): AggregateMemberOfTeamUseCase => {
      if (!instance) {
        instance = new AggregateMemberOfTeamUseCase(teamService);
      }
  
      return instance;
    };
  
    return factory;
})();

//Member
const SignInMemberUseCaseFactory =
(() => {
    let instance: SingInMemberUseCase;
  
    const factory = (memberService: MemberService): SingInMemberUseCase => {
      if (!instance) {
        instance = new SingInMemberUseCase(memberService);
      }
  
      return instance;
    };
  
    return factory;
})();

const GetMemberUseCaseFactory = 
(() => {
    let instance: GetMemberUseCase;
  
    const factory = (memberService: MemberService): GetMemberUseCase => {
      if (!instance) {
        instance = new GetMemberUseCase(memberService);
      }
  
      return instance;
    };
  
    return factory;
})();

const GetEmailMemberUseCaseFactory = 
(() => {
    let instance: GetEmailMemberUseCase;
  
    const factory = (memberService: MemberService): GetEmailMemberUseCase => {
      if (!instance) {
        instance = new GetEmailMemberUseCase(memberService);
      }
  
      return instance;
    };
  
    return factory;
})();


const UpdateMemberUseCaseFactory = 
(() => {
    let instance: UpdateMemberUseCase;
  
    const factory = (memberService: MemberService): UpdateMemberUseCase => {
      if (!instance) {
        instance = new UpdateMemberUseCase(memberService);
      }
  
      return instance;
    };
  
    return factory;
})();
const DeleteMemberUseCaseFactory = 
(() => {
    let instance: DeleteMemberUseCase;
  
    const factory = (memberService: MemberService): DeleteMemberUseCase => {
      if (!instance) {
        instance = new DeleteMemberUseCase(memberService);
      }
  
      return instance;
    };
  
    return factory;
})();

const RegisterMemberUseCaseFactory = (() => {
    let instance: RegisterMemberUseCase;
  
    const factory = (memberService: MemberService): RegisterMemberUseCase => {
      if (!instance) {
        instance = new RegisterMemberUseCase(memberService);
      }
  
      return instance;
    };
  
    return factory;
  })();

//Autentication
const HasUserUseCaseFactory = (() => {
    let instance :HasUserUseCase;
  
    return () => {
      if (!instance) {
        instance = new HasUserUseCase();
      }
  
      return instance;
    };
  })();


const DecodeUseCaseFactorty = () => new HasUserTokenDecodeUseCase();
(() => {
  let instance: HasUserTokenDecodeUseCase;

  const factory = (): HasUserTokenDecodeUseCase => {
    if (!instance) {
      instance = new HasUserTokenDecodeUseCase();
    }

    return instance;
  };

  return factory;
})();


const SignInFireBaseUseCaseFactory =
(() => {
  let instance: SignInFireBaseUseCase;

  const factory = (auth: Auth): SignInFireBaseUseCase => {
    if (!instance) {
      instance = new SignInFireBaseUseCase(auth);
    }

    return instance;
  };

  return factory;
})();

const SignUpFireBaseUseCaseFactory =
(() => {
  let instance: SignUpFireBaseUseCase;

  const factory = (auth: Auth): SignUpFireBaseUseCase => {
    if (!instance) {
      instance = new SignUpFireBaseUseCase(auth);
    }

    return instance;
  };

  return factory;
})();

const SignInGoogleUseCaseFactory =
(() => {
  let instance: SignInGoogleUseCase;

  const factory = (auth: Auth): SignInGoogleUseCase => {
    if (!instance) {
      instance = new SignInGoogleUseCase(auth);
    }

    return instance;
  };

  return factory;
})();


export const useCaseProviders = {

    signUpFireBaseUseCasepProvaider : 
    {
        provide: SignUpFireBaseUseCase,
        useFactory: SignUpFireBaseUseCaseFactory,
        deps: [Auth],
    },
    signInFireBaseUseCasepProvaider : 
    {
        provide: SignUpFireBaseUseCase,
        useFactory: SignInFireBaseUseCaseFactory,
        deps: [Auth],
    },
    signInGoogleUseCasepProvaider : 
    {
        provide: SignInGoogleUseCase,
        useFactory: SignInGoogleUseCaseFactory,
        deps: [Auth],
    },
    registerMemberUseCaseProvider : 
    {
        provide: RegisterMemberUseCase,
        useFactory: RegisterMemberUseCaseFactory,
        deps: [MemberService],
    },
    DecodeUseCaseProviders : {
        provide: HasUserTokenDecodeUseCase,
        useFactory: DecodeUseCaseFactorty,
    },

    hasUserUseCaseProvider : {
        provide: HasUserUseCase,
        useFactory: HasUserUseCaseFactory,
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
    getEmailMemberUseCaseProvider : {
        provide: GetEmailMemberUseCase,
        useFactory: GetEmailMemberUseCaseFactory,
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

