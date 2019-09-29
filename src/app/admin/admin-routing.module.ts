import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminCreateComponent } from './admin-create/admin-create.component';
import { AdminRemoveComponent } from './admin-remove/admin-remove.component';


const adminRoutes: Routes = [
{
  path: 'admin', component: AdminComponent, children: [
    { path: 'add', component: AdminCreateComponent },
    { path: 'remove', component: AdminRemoveComponent }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
