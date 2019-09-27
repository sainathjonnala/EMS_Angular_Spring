import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';        

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material';
import { AdminCreateComponent } from './admin/admin-create/admin-create.component';
import { AdminComponent } from './admin/admin/admin.component';
import { AdminRemoveComponent } from './admin/admin-remove/admin-remove.component';
import { AdminEmployeesListComponent } from './admin/admin-employees-list/admin-employees-list.component';
import { AdminDepartmentsListComponent } from './admin/admin-departments-list/admin-departments-list.component';
import { AdminSalariesComponent } from './admin/admin-salaries/admin-salaries.component';
import { AdminEmployeeDetailsComponent } from './admin/admin-employee-details/admin-employee-details.component';
import { AdminManagerEmployeesComponent } from './admin/admin-manager-employees/admin-manager-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminCreateComponent,
    AdminComponent,
    AdminRemoveComponent,
    AdminEmployeesListComponent,
    AdminDepartmentsListComponent,
    AdminSalariesComponent,
    AdminEmployeeDetailsComponent,
    AdminManagerEmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
