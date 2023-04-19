import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PermissionGuard } from './guards/permission.guard';
import { BackGuard } from './guards/back.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [ BackGuard],
    loadChildren: () => import('./presetation/login/login.module')
    .then( m => m.LoginModule )
  },
  {
     path: 'home',
     canActivate: [ PermissionGuard ],
     loadChildren: () => import('./presetation/home/home.module')
     .then( m => m.HomeModule )
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
  path:   '**' ,
  redirectTo: 'login',
  pathMatch: 'full'
  },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
