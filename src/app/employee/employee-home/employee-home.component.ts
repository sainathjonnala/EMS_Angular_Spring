import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee-home',
  templateUrl: './employee-home.component.html',
  styleUrls: ['./employee-home.component.css']
})
export class EmployeeHomeComponent implements OnInit {

  employee: Employee;
  constructor() { }

  ngOnInit() {
    this.employee = JSON.parse(sessionStorage.getItem('employeeDetails'))
  }

}
