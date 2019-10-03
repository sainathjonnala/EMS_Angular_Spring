import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { Leave } from 'src/app/models/leave';
import { ManagerLeaveService } from 'src/app/services/manager-leave.service';

@Component({
  selector: 'app-manager-leave-requests',
  templateUrl: './manager-leave-requests.component.html',
  styleUrls: ['./manager-leave-requests.component.css']
})
export class ManagerLeaveRequestsComponent implements OnInit {

  manager: Employee;
  requestsList: Leave[];
  isEmpty:boolean = false;
  isAccepted: boolean;
  isRejected: boolean;

  constructor(private managerLeaveService: ManagerLeaveService) { }

  ngOnInit() {
    this.manager = JSON.parse(sessionStorage.getItem('managerDetails'));
    this.managerLeaveService.getLeaveRequests(this.manager.employee_id).subscribe( 
      ( data ) => {

        if( data.length > 0 ){
          console.log(data);
          
          this.requestsList = data;
          
          this.isEmpty = false;
        }
        else{
          this.isEmpty = true;
        }

      }
    )
  }

  acceptLeave(leave: Leave){
    console.log(leave);
    this.managerLeaveService.acceptLeave(leave).subscribe(
      (data) => {
        if( data.valueOf() ){
          this.ngOnInit();
          this.isAccepted = true;
        }
      }
    )
  }

  rejectLeave(leave: Leave){
    console.log(leave);
    this.managerLeaveService.rejectLeave(leave).subscribe(
      (data) => {
        if( data.valueOf() ){
          this.ngOnInit();
          this.isRejected = true;
        }
      }
    )
  }


}
