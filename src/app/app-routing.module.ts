import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '' , redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'admin' , redirectTo: '/admin/home', pathMatch: 'full' },
  { path: 'employee' , redirectTo: '/employee/home', pathMatch: 'full' },
  { path: 'manager' , redirectTo: '/manager/home', pathMatch: 'full' },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }