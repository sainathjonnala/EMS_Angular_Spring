import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { LeaveBalance } from 'src/app/models/leave-balance';
import { ManagerLeaveService } from 'src/app/services/manager-leave.service';

@Component({
  selector: 'app-manager-leave-balance',
  templateUrl: './manager-leave-balance.component.html',
  styleUrls: ['./manager-leave-balance.component.css']
})
export class ManagerLeaveBalanceComponent implements OnInit {

  manager: Employee;
  leave_balance: LeaveBalance; 
  
  constructor(private managerLeaveService: ManagerLeaveService) { }

  ngOnInit() {
    this.manager = JSON.parse(sessionStorage.getItem('managerDetails'));
    this.managerLeaveService.getLeaveBalance(this.manager.employee_id).subscribe(
      (data) => {
        if(data != null){
          this.manager.leave_balance = data;
        }   
      }
    )
  }
}
