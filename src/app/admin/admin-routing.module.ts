import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminCreateComponent } from './admin-create/admin-create.component';
import { AdminRemoveComponent } from './admin-remove/admin-remove.component';
import { AdminEmployeesListComponent } from './admin-employees-list/admin-employees-list.component';
import { AdminDepartmentsListComponent } from './admin-departments-list/admin-departments-list.component';
import { AdminEmployeeDetailsComponent } from './admin-employee-details/admin-employee-details.component';
import { AdminManagerEmployeesComponent } from './admin-manager-employees/admin-manager-employees.component';
import { AdminSalariesComponent } from './admin-salaries/admin-salaries.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminAuthGuard } from '../guards/admin-auth.guard';


const adminRoutes: Routes = [
{
  path: 'admin', component: AdminComponent,canActivate: [AdminAuthGuard], children: [
    { path: 'home', component: AdminHomeComponent},
    { path: 'add', component: AdminCreateComponent },
    { path: 'remove', component: AdminRemoveComponent },
    { path: 'employees', component: AdminEmployeesListComponent },
    { path: 'departments', component: AdminDepartmentsListComponent },
    { path: 'employee', component: AdminEmployeeDetailsComponent },
    { path: 'managerEmployees', component: AdminManagerEmployeesComponent },
    { path: 'salaries', component: AdminSalariesComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
