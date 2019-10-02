import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Department } from 'src/app/models/department';

@Component({
  selector: 'app-admin-departments-list',
  templateUrl: './admin-departments-list.component.html',
  styleUrls: ['./admin-departments-list.component.css']
})
export class AdminDepartmentsListComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  departmentsList: Department[];
  isEmpty: boolean = true;

  ngOnInit() {

    this.adminService.getDepartments().subscribe(
      (data) => {
        if( data != null ){
          this.departmentsList = data;
          this.isEmpty = false;
        }
      }
    )
  }

}
