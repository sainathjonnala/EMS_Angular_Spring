import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeeLeaveService } from 'src/app/services/employee-leave.service';
import { LeaveBalance } from 'src/app/models/leave-balance';

@Component({
  selector: 'app-employee-leave-balance',
  templateUrl: './employee-leave-balance.component.html',
  styleUrls: ['./employee-leave-balance.component.css']
})
export class EmployeeLeaveBalanceComponent implements OnInit {

  employee: Employee;
  leave_balance: LeaveBalance;   
  constructor(private leaveService: EmployeeLeaveService) { }

  ngOnInit() {
    this.employee = JSON.parse(sessionStorage.getItem('employeeDetails'));
    this.leaveService.getLeaveBalance(this.employee.employee_id).subscribe(
      (data) => {
        if(data != null){
          this.employee.leave_balance = data;
          console.log(this.employee.leave_balance);
        }
        
        
      }
    )

  }

}
