import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-admin-employees-list',
  templateUrl: './admin-employees-list.component.html',
  styleUrls: ['./admin-employees-list.component.css']
})
export class AdminEmployeesListComponent implements OnInit {
 

  constructor(private adminService: AdminService) { }

  employeesList: Employee[];
  isEmpty: boolean = true;

  ngOnInit() {
    this.adminService.getEmployees().subscribe(
      (data) => {
      
        if(data != null){
        this.employeesList = data;
        this.isEmpty = false;
      }  
    }
  )
}

}
