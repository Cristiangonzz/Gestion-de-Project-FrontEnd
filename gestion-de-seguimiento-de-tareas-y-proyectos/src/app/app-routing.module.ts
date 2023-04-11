import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from './guards/permission.guard';

const routes: Routes = [

  {
     path: 'home',
     canActivate: [ PermissionGuard ],
     loadChildren: () => import('./presetation/home/home.module')
     .then( m => m.HomeModule )
  },

  {
    path: 'login',
    loadChildren: () => import('./presetation/login/login.module')
    .then( m => m.LoginModule )
  },

  {
    path: 'collaboration',
    canActivate: [ PermissionGuard ],
    loadChildren: () => import('./presetation/collaboration/collaboration.module')
    .then( m => m.CollaborationModule )
  },
  {
    path: 'member',
    canActivate: [ PermissionGuard ],
    loadChildren: () => import('./presetation/member/member.module')
    .then( m => m.MemberModule )
  },

  {
    path: 'project',
    canActivate: [ PermissionGuard ],
    loadChildren: () => import('./presetation/project/project.module')
    .then( m => m.ProjectModule )
  },
  {
    path: 'task',
    canActivate: [ PermissionGuard ],
    loadChildren: () => import('./presetation/task/task.module')
    .then( m => m.TaskModule )
  },
  {
    path: 'team',
    canActivate: [ PermissionGuard ],
    loadChildren: () => import('./presetation/team/team.module')
    .then( m => m.TeamModule )
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
  path:   '**' ,
  redirectTo: 'login',
  },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
