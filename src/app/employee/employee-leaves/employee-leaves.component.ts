import { Component, OnInit } from '@angular/core';
import { EmployeeLeaveService } from 'src/app/services/employee-leave.service';
import { Employee } from 'src/app/models/employee';
import { Leave } from 'src/app/models/leave';

@Component({
  selector: 'app-employee-leaves',
  templateUrl: './employee-leaves.component.html',
  styleUrls: ['./employee-leaves.component.css']
})
export class EmployeeLeavesComponent implements OnInit {

  employee: Employee;
  leavesList: Leave[];
  isEmpty:boolean = false;

  constructor(private leaveService: EmployeeLeaveService) { }

  ngOnInit() {
    this.employee = JSON.parse(sessionStorage.getItem('employeeDetails'));
    this.leaveService.getLeaveTransactions(this.employee.employee_id).subscribe(
      
      ( data ) => {

        if( data.length > 0 ){
          this.leavesList = data;
          this.isEmpty = false;
        }
        else{
          this.isEmpty = true;
        }

      }
    )
  }

}
