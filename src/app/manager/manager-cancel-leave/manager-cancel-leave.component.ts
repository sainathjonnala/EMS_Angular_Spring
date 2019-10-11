import { Component, OnInit } from '@angular/core';
import { ManagerLeaveService } from 'src/app/services/manager-leave.service';
import { Leave } from 'src/app/models/leave';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-manager-cancel-leave',
  templateUrl: './manager-cancel-leave.component.html',
  styleUrls: ['./manager-cancel-leave.component.css']
})
export class ManagerCancelLeaveComponent implements OnInit {

  manager: Employee;
  leavesList: Leave[];
  isEmpty:boolean = false;
  isCancelled:boolean = false;

  constructor(private managerleaveService: ManagerLeaveService) { }

  ngOnInit() {
    this.manager = JSON.parse(sessionStorage.getItem('managerDetails'));
    this.managerleaveService.getAppliedLeaves(this.manager.employee_id).subscribe( 
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

  cancelLeave(leave: Leave){
    this.managerleaveService.cancelLeave(leave).subscribe(
      (data) => {
        if( data.valueOf()){
          this.isCancelled = true;
        }
      }
    )
  }

}
