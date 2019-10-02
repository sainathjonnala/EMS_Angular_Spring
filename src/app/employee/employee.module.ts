import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeHomeComponent } from './employee-home/employee-home.component';

@NgModule({
  declarations: [EmployeeHomeComponent],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
