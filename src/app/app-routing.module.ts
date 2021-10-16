import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'home',
  //   loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: '',
    redirectTo: 'dashboard',
    // redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'add-form',
    loadChildren: () => import('./pages/add-form/add-form.module').then( m => m.AddFormPageModule)
  },
 
  {
    path: 'managers',
    loadChildren: () => import('./modals/managers/managers.module').then( m => m.ManagersPageModule)
  },
  {
    path: 'form-list',
    loadChildren: () => import('./pages/form-list/form-list.module').then( m => m.FormListPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./pages/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./pages/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'form-section',
    loadChildren: () => import('./pages/form-section/form-section.module').then( m => m.FormSectionPageModule)
  },
  {
    path: 'incident-type',
    loadChildren: () => import('./pages/incident-type/incident-type.module').then( m => m.IncidentTypePageModule)
  },
  {
    path: 'investigation',
    loadChildren: () => import('./pages/investigation/investigation.module').then( m => m.InvestigationPageModule)
  },
  {
    path: 'actions',
    loadChildren: () => import('./pages/actions/actions.module').then( m => m.ActionsPageModule)
  },
  {
    path: 'investigation-view',
    loadChildren: () => import('./pages/investigation-view/investigation-view.module').then( m => m.InvestigationViewPageModule)
  },
  {
    path: 'actions-view',
    loadChildren: () => import('./pages/actions-view/actions-view.module').then( m => m.ActionsViewPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'header',
    loadChildren: () => import('./shared-module/header/header.module').then( m => m.HeaderPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
