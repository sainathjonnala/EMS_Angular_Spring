import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { Leave } from 'src/app/models/leave';
import { ManagerLeaveService } from 'src/app/services/manager-leave.service';

@Component({
  selector: 'app-manager-leaves',
  templateUrl: './manager-leaves.component.html',
  styleUrls: ['./manager-leaves.component.css']
})
export class ManagerLeavesComponent implements OnInit {

  manager: Employee;
  leavesList: Leave[];
  isEmpty:boolean = false;

  constructor(private managerLeaveService: ManagerLeaveService) { }

  ngOnInit() {
    this.manager = JSON.parse(sessionStorage.getItem('managerDetails'));
    this.managerLeaveService.getLeaveTransactions(this.manager.employee_id).subscribe( 
      ( data ) => {

        if( data.length > 0 ){
          console.log(data);
          
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
