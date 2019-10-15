import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';        

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminModule } from './admin/admin.module';
import { EmployeeModule } from './employee/employee.module';
import { ManagerComponent } from './manager/manager/manager.component';
import { ManagerModule } from './manager/manager.module';
import { LogoutComponent } from './logout/logout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmployeeComponent } from './employee/employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    EmployeeComponent,
    ManagerComponent,
    LogoutComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    AdminModule,
    EmployeeModule,
    ManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
