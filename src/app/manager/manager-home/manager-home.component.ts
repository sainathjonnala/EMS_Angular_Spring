import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.css']
})
export class ManagerHomeComponent implements OnInit {
  manager: Employee;

  constructor() { }

  ngOnInit() {
    this.manager = JSON.parse(sessionStorage.getItem('managerDetails'));
  }

}
