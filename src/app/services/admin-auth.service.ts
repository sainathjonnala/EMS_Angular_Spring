import { Injectable } from '@angular/core';
import { Login } from '../models/login';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {

  constructor(private router: Router) { }

  isAdmin(){

    if(sessionStorage.length == 0){
      this.router.navigate(['login']);
    }
    
    let adminDetails:Login = JSON.parse(sessionStorage.getItem('adminDetails'));

    if(adminDetails != null && adminDetails.role.role_id == 1) {
      return true;
    }
    else{
      sessionStorage.clear();
      this.router.navigate(['login']);
    }

  }
}
