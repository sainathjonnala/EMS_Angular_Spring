import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerLeavesComponent } from './manager-leaves/manager-leaves.component';


@NgModule({
  declarations: [ManagerLeavesComponent],
  imports: [
    CommonModule,
    ManagerRoutingModule
  ]
})
export class ManagerModule { }
