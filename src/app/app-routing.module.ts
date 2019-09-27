import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { CreateComponent } from './admin/create/create.component';


const routes: Routes = [
  {path: '' , redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'admin', component: AdminComponent},
  {path: 'admin/create', component: CreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
