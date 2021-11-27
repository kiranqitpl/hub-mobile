import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'managers',
    loadChildren: () => import('./modals/managers/managers.module').then(m => m.ManagersPageModule)
  },
  {
    path: 'image-modal',
    loadChildren: () => import('./modals/image-modal/image-modal.module').then(m => m.ImageModalPageModule)
  },
  {
    path: 'investigation',
    loadChildren: () => import('./pages/investigator/investigation/investigation.module').then(m => m.InvestigationPageModule)
  },
  {
    path: 'actions',
    loadChildren: () => import('./pages/investigator/actions/actions.module').then(m => m.ActionsPageModule)
  },
  {
    path: 'actions-view',
    loadChildren: () => import('./pages/investigator/actions-view/actions-view.module').then(m => m.ActionsViewPageModule)
  },
  {
    // path: 'investigation-view',
    path: 'investigation-view/:investigation_id',
    loadChildren: () => import('./pages/investigator/investigation-view/investigation-view.module').then(m => m.InvestigationViewPageModule)
  },
  {
    path: 'incident-form-list',
    loadChildren: () => import('./pages/home/safety-menu/incident/incident-form-list/incident-form-list.module').then(m => m.IncidentFormListPageModule)
  },
  // {
  //   path: 'incident-details/:incident_id',
  //   loadChildren: () => import('./pages/home/safety-menu/incident/incident-details/incident-details.module').then(m => m.IncidentDetailsPageModule)
  // },
  // {
  //   path: 'incident-form-edit/:incident_id',
  //   loadChildren: () => import('./pages/home/safety-menu/incident/incident-form-edit/incident-form-edit.module').then(m => m.IncidentFormEditPageModule)
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
