import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { Leave } from 'src/app/models/leave';
import { EmployeeLeaveService } from 'src/app/services/employee-leave.service';

@Component({
  selector: 'app-employee-cancel-leave',
  templateUrl: './employee-cancel-leave.component.html',
  styleUrls: ['./employee-cancel-leave.component.css']
})
export class EmployeeCancelLeaveComponent implements OnInit {

  employee: Employee;
  leavesList: Leave[];
  isEmpty:boolean = false;
  isCancelled:boolean = false;

  constructor(private leaveService: EmployeeLeaveService) { }

  ngOnInit() {

    this.employee = JSON.parse(sessionStorage.getItem('employeeDetails'));
    this.leaveService.getAppliedLeaves(this.employee.employee_id).subscribe( 
      ( data ) => {
        console.log(data);
        
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

  cancelLeave(leave: Leave){
    
    this.leaveService.cancelLeave(leave).subscribe(
      (data) => {
        
        if( data.valueOf() ){
          this.ngOnInit();
          this.isCancelled = true;
        }
      }
    )
  }

}
