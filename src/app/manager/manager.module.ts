import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';       
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerLeavesComponent } from './manager-leaves/manager-leaves.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { ManagerLeaveRequestsComponent } from './manager-leave-requests/manager-leave-requests.component';
import { ManagerLeaveBalanceComponent } from './manager-leave-balance/manager-leave-balance.component';
import { ManagerCancelLeaveComponent } from './manager-cancel-leave/manager-cancel-leave.component';
import { ManagerApplyLeaveComponent } from './manager-apply-leave/manager-apply-leave.component';


@NgModule({
  declarations: [
    ManagerHomeComponent,
    ManagerLeaveRequestsComponent,
    ManagerLeaveBalanceComponent,
    ManagerCancelLeaveComponent,
    ManagerApplyLeaveComponent,
    ManagerLeavesComponent
  ],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManagerModule { }
