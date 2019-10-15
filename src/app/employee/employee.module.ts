import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';       
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';
import { EmployeeApplyLeaveComponent } from './employee-apply-leave/employee-apply-leave.component';
import { EmployeeCancelLeaveComponent } from './employee-cancel-leave/employee-cancel-leave.component';
import { EmployeeLeaveBalanceComponent } from './employee-leave-balance/employee-leave-balance.component';
import { EmployeeLeavesComponent } from './employee-leaves/employee-leaves.component';

@NgModule({
  declarations: [
    EmployeeHomeComponent,
    EmployeeApplyLeaveComponent,
    EmployeeCancelLeaveComponent,
    EmployeeLeaveBalanceComponent,
    EmployeeLeavesComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
