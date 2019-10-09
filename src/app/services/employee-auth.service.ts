import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAuthService {

  constructor(private router: Router) { }

  isEmployee(){

    if(sessionStorage.length == 0){
      this.router.navigate(['login']);
    }
    let employeeDetails:Employee = JSON.parse(sessionStorage.getItem('employeeDetails'));

    if(employeeDetails != null && employeeDetails.login.role.role_id == 2) {
      return true;
    }
    else{
      sessionStorage.clear();
      this.router.navigate(['login']);
    }

  }
}
