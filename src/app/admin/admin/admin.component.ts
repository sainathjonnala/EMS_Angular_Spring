import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminDetails: Login

  constructor() { }
  
  ngOnInit() {
    this.adminDetails = JSON.parse(sessionStorage.getItem('adminDetails'))
  }

}
