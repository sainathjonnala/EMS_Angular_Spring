import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';   


import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminCreateComponent } from './admin-create/admin-create.component';
import { AdminDepartmentsListComponent } from './admin-departments-list/admin-departments-list.component';
import { AdminEmployeesListComponent } from './admin-employees-list/admin-employees-list.component';
import { AdminManagerEmployeesComponent } from './admin-manager-employees/admin-manager-employees.component';
import { AdminEmployeeDetailsComponent } from './admin-employee-details/admin-employee-details.component';
import { AdminRemoveComponent } from './admin-remove/admin-remove.component';
import { AdminSalariesComponent } from './admin-salaries/admin-salaries.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    AdminCreateComponent,
    AdminDepartmentsListComponent,
    AdminEmployeesListComponent,
    AdminManagerEmployeesComponent,
    AdminEmployeeDetailsComponent,
    AdminRemoveComponent,
    AdminSalariesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
