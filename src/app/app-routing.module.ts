import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/auth-guard.service';
import { DashboardLogoutComponent } from './dashboard/dashboard-logout.component';
import { DashboardRevenuesComponent } from './dashboard/dashboard-revenues.component';
import { DashboardSettingsComponent } from './dashboard/dashboard-settings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        component: HomeComponent
      },
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
  { path: 'login', component: LoginFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
