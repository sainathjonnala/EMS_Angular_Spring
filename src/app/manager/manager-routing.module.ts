import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from './manager/manager.component';
import { ManagerApplyLeaveComponent } from './manager-apply-leave/manager-apply-leave.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerCancelLeaveComponent } from './manager-cancel-leave/manager-cancel-leave.component';
import { ManagerLeaveBalanceComponent } from './manager-leave-balance/manager-leave-balance.component';
import { ManagerLeavesComponent } from './manager-leaves/manager-leaves.component';
import { ManagerLeaveRequestsComponent } from './manager-leave-requests/manager-leave-requests.component';
import { ManagerAuthGuard } from '../guards/manager-auth.guard';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const managerRoutes: Routes = [
  { 
    path: 'manager', component: ManagerComponent, canActivate: [ManagerAuthGuard], children: [
      { path: 'home', component: ManagerHomeComponent},
      { path: 'applyLeave', component: ManagerApplyLeaveComponent},
      { path: 'cancelLeave', component: ManagerCancelLeaveComponent},
      { path: 'leaves', component: ManagerLeavesComponent},
      { path: 'leaveBalance', component: ManagerLeaveBalanceComponent},
      { path: 'requests', component: ManagerLeaveRequestsComponent},
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(managerRoutes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
