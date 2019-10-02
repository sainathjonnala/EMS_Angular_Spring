import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor() { }
  employee: Employee
  ngOnInit() {
     this.employee = JSON.parse(sessionStorage.getItem('employeeDetails'))
     console.log(this.employee)
  }

}
