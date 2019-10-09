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
import { EmployeeApplyLeaveComponent } from './employee/employee-apply-leave/employee-apply-leave.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { EmployeeLeavesComponent } from './employee/employee-leaves/employee-leaves.component';
import { EmployeeCancelLeaveComponent } from './employee/employee-cancel-leave/employee-cancel-leave.component';
import { AdminModule } from './admin/admin.module';
import { EmployeeModule } from './employee/employee.module';
import { EmployeeLeaveBalanceComponent } from './employee/employee-leave-balance/employee-leave-balance.component';
import { ManagerLeaveRequestsComponent } from './manager/manager-leave-requests/manager-leave-requests.component';
import { ManagerCancelLeaveComponent } from './manager/manager-cancel-leave/manager-cancel-leave.component';
import { ManagerHomeComponent } from './manager/manager-home/manager-home.component';
import { ManagerApplyLeaveComponent } from './manager/manager-apply-leave/manager-apply-leave.component';
import { ManagerLeaveBalanceComponent } from './manager/manager-leave-balance/manager-leave-balance.component';
import { ManagerComponent } from './manager/manager/manager.component';
import { ManagerModule } from './manager/manager.module';
import { LogoutComponent } from './logout/logout.component';

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
    AdminManagerEmployeesComponent,
    EmployeeApplyLeaveComponent,
    EmployeeComponent,
    EmployeeLeavesComponent,
    EmployeeCancelLeaveComponent,
    EmployeeLeaveBalanceComponent,
    ManagerLeaveRequestsComponent,
    ManagerCancelLeaveComponent,
    ManagerHomeComponent,
    ManagerApplyLeaveComponent,
    ManagerLeaveBalanceComponent,
    ManagerComponent,
    LogoutComponent,
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
