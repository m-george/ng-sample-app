import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLogoutComponent } from './dashboard/dashboard-logout.component';
import { DashboardRevenuesComponent } from './dashboard/dashboard-revenues.component';
import { DashboardSettingsComponent } from './dashboard/dashboard-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginFormComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'revenues',
        component: DashboardRevenuesComponent,
      },
      {
        path: 'settings',
        component: DashboardSettingsComponent
      },
      {
        path: 'logout',
        component: DashboardLogoutComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
