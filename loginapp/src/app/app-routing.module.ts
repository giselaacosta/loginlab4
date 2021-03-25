import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from '../app/components/login/login.component';
import { ErrorComponent } from '../app/components/error/error.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { WelcomeComponent } from '../app/components/welcome/welcome.component';


const appRoutes = [
  {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
{ path: "login", component: LoginComponent, pathMatch: "full" },
{ path: "welcome", component: WelcomeComponent, pathMatch: "full" },
{ path: "error", component: ErrorComponent, pathMatch: "full" },
{ path: "register", component: RegisterComponent, pathMatch: "full" },

];
export const routing = RouterModule.forRoot(appRoutes);