import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeApplyLeaveComponent } from './employee-apply-leave/employee-apply-leave.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeCancelLeaveComponent } from './employee-cancel-leave/employee-cancel-leave.component';
import { EmployeeLeavesComponent } from './employee-leaves/employee-leaves.component';
import { EmployeeLeaveBalanceComponent } from './employee-leave-balance/employee-leave-balance.component';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeAuthGuard } from '../guards/employee-auth.guard';


const employeeRoutes: Routes = [
  { 
    path: 'employee' , component: EmployeeComponent, canActivate: [EmployeeAuthGuard], children: [
      { path: 'home', component: EmployeeHomeComponent},
      { path: 'applyLeave' , component: EmployeeApplyLeaveComponent},
      { path: 'cancelLeave' , component: EmployeeCancelLeaveComponent},
      { path: 'leaves' , component: EmployeeLeavesComponent},
      { path: 'leaveBalance' , component:EmployeeLeaveBalanceComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(employeeRoutes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
