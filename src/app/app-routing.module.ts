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
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
  },
  {
    path: 'managers',
    loadChildren: () => import('./modals/managers/managers.module').then(m => m.ManagersPageModule)
  },
  // {
  //   path: 'form-list',
  //   loadChildren: () => import('./pages/form-list/form-list.module').then(m => m.FormListPageModule)
  // },
  // {
  //   path: 'add-form',
  //   loadChildren: () => import('./pages/add-form/add-form.module').then(m => m.AddFormPageModule)
  // },
  // {
  //   path: 'view',
  //   loadChildren: () => import('./pages/view/view.module').then( m => m.ViewPageModule)
  // },
  // {
  //   path: 'view/:form_id',
  //   loadChildren: () => import('./pages/view/view.module').then(m => m.ViewPageModule)
  // },
  // {
  //   path: 'edit',
  //   loadChildren: () => import('./pages/edit/edit.module').then(m => m.EditPageModule)
  // },
  // {
  //   path: 'investigation-view',
  //   loadChildren: () => import('./pages/investigation-view/investigation-view.module').then( m => m.InvestigationViewPageModule)
  // },
  // {
  //   path: 'form-section',
  //   loadChildren: () => import('./pages/form-section/form-section.module').then(m => m.FormSectionPageModule)
  // },
  // {
  //   path: 'incident-type',
  //   loadChildren: () => import('./pages/incident-type/incident-type.module').then(m => m.IncidentTypePageModule)
  // },
  {
    path: 'investigation',
    loadChildren: () => import('./pages/investigation/investigation.module').then(m => m.InvestigationPageModule)
  },
  {
    path: 'actions',
    loadChildren: () => import('./pages/actions/actions.module').then(m => m.ActionsPageModule)
  },
  {
    path: 'investigation-view/:investigation_id',
    loadChildren: () => import('./pages/investigation-view/investigation-view.module').then(m => m.InvestigationViewPageModule)
  },
  {
    path: 'actions-view',
    loadChildren: () => import('./pages/actions-view/actions-view.module').then(m => m.ActionsViewPageModule)
  },

  //----------------------------------------------------------- New Routes -----------------------------------------------------------------//

  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'safety-menu',
    loadChildren: () => import('./pages/home/safety-menu/safety-menu.module').then(m => m.SafetyMenuPageModule)
  },
  {
    path: 'incident-form',
    loadChildren: () => import('./pages/incident/incident-form/incident-form.module').then(m => m.IncidentFormPageModule)
  },
  {
    path: 'incident-form-list',
    loadChildren: () => import('./pages/incident/incident-form-list/incident-form-list.module').then(m => m.IncidentFormListPageModule)
  },
  {
    path: 'incident-details/:investigation_id',
    loadChildren: () => import('./pages/incident/incident-details/incident-details.module').then(m => m.IncidentDetailsPageModule)
  },
  {
    path: 'image-modal',
    loadChildren: () => import('./modals/image-modal/image-modal.module').then(m => m.ImageModalPageModule)
  },
  {
    path: 'incident-form-edit/:investigation_id',
    loadChildren: () => import('./pages/incident/incident-form-edit/incident-form-edit.module').then(m => m.IncidentFormEditPageModule)
  },
  {
    path: 'prestart-dashboard',
    loadChildren: () => import('./pages/prestart/prestart-dashboard/prestart-dashboard.module').then(m => m.PrestartDashboardPageModule)
  },
  {
    path: 'vehicle-hoist-add-form',
    loadChildren: () => import('./pages/prestart/vehicle-hoist/vehicle-hoist-add-form/vehicle-hoist-add-form.module').then(m => m.VehicleHoistAddFormPageModule)
  },


  //------------------------------------------------------------- New Routes -----------------------------------------------------------------//

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
