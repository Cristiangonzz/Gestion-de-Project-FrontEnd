import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
//import { PermisoGuard } from './guards/permiso.guard';

const routes: Routes = [

  // {
  //    path: 'inicio',
  //    canActivate: [ PermisoGuard ],
  //    loadChildren: () => import('./components/components.module')
  //    .then( m => m.ComponentsModule )
  // },

  // {
  //   path: '',
  //   loadChildren: () => import('./login/login-module.module')
  //   .then( m => m.LoginModule )
  // },

   {
     path: 'member',
     //canActivate: [ PermisoGuard ],
     loadChildren: () => import('./presetation/member/member.module')
     .then( m => m.MemberModule )
   },
 

  // {
  //   path: 'project',
  //   //canActivate: [ PermisoGuard ],
  //   loadChildren: () => import('./presetation/project/project.module')
  //   .then( m => m.ProjectModule )
  // },
  // {
  //   path: 'collaboration',
  //   //canActivate: [ PermisoGuard ],
  //   loadChildren: () => import('./presetation/collaboration/collaboration.module')
  //   .then( m => m.CollaborationModule )
  // },
  // {
  //   path: 'task',
  //   //canActivate: [ PermisoGuard ],
  //   loadChildren: () => import('./presetation/task/task.module')
  //   .then( m => m.TaskModule )
  // },
  // {
  //   path: 'team',
  //   //canActivate: [ PermisoGuard ],
  //   loadChildren: () => import('./presetation/team/team.module')
  //   .then( m => m.TeamModule )
  // },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  // {
  //   path:   '**' ,
  //   redirectTo: '',
  // },

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
