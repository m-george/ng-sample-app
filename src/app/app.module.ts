import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CurrencyService } from './currency.service';
import { DashboardSettingsComponent } from './dashboard/settings/settings.component';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { HomeComponent } from './dashboard/home/home.component';
import { DashboardRevenuesComponent } from './dashboard/revenues/revenues.component';
import { RevenuesService } from './revenues.service';

@NgModule({
    declarations: [
        AppComponent,
        LoginFormComponent,
        AppHeaderComponent,
        DashboardComponent,
        DashboardRevenuesComponent,
        DashboardSettingsComponent,
        HomeComponent
    ],
    imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
    providers: [CurrencyService, AuthService, AuthGuardService, RevenuesService],
    bootstrap: [AppComponent]
})
export class AppModule {}
