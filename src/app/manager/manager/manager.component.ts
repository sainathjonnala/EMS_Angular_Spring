import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {
  
  employee: Employee;

  constructor() { }

  ngOnInit() {
    this.employee = JSON.parse(sessionStorage.getItem('managerDetails'));
  }

}
