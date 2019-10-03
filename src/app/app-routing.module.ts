import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin/admin.component';
import { EmployeeComponent } from './employee/employee/employee.component';
import { ManagerComponent } from './manager/manager/manager.component';

const routes: Routes = [
  { path: '' , redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin' , redirectTo: 'admin/home', pathMatch: 'full' },
  { path: 'admin', component: AdminComponent },
  { path: 'employee' , redirectTo: 'employee/home', pathMatch: 'full' },
  { path: 'employee', component:EmployeeComponent },
  { path: 'manager' , redirectTo: 'manager/home', pathMatch: 'full' },
  { path: 'manager', component: ManagerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }