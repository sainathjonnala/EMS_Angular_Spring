import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const employeeRoutes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(employeeRoutes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
