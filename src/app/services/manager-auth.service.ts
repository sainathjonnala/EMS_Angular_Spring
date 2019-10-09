import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class ManagerAuthService {

  constructor(private router: Router) { }

  isManager(){

    if(sessionStorage.length == 0){
      this.router.navigate(['login']);
    }
    let managerDetails:Employee = JSON.parse(sessionStorage.getItem('managerDetails'));

    if(managerDetails != null && managerDetails.login.role.role_id == 3) {
      return true;
    }
    else{
      sessionStorage.clear();
      this.router.navigate(['login']);
    }

  }
}
