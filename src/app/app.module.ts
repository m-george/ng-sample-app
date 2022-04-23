import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppHeaderNavComponent } from './app-header-nav/app-header-nav.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CurrencyService } from './currency.service';
import { DashboardSettingsComponent } from './dashboard/dashboard-settings.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    AppHeaderComponent,
    AppHeaderNavComponent,
    HomeComponent,
    DashboardComponent,
    DashboardSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
