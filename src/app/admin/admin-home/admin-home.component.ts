import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  adminDetails: Login;
  constructor() { }

  ngOnInit() {
    this.adminDetails = JSON.parse(sessionStorage.getItem('adminDetails'))
  }

}
