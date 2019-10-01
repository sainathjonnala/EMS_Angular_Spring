import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit() {
  }

  invalid:boolean = false;
  
  LoginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  get username() {
    return this.LoginForm.get('username');
  }

  get password() {
    return this.LoginForm.get('password');
  }

  onSubmit(loginCredentials: Login) {

    this.loginService.userValidation(loginCredentials).subscribe(
      (data) => {
  
        if (data.role.role_name == "admin") {
          sessionStorage.setItem('adminDetails',JSON.stringify(data))
          this.router.navigate(['admin'])

        }
        else if (data.role.role_name == "employee" || data.role.role_name == "manager") {
          this.loginService.getUser(loginCredentials).subscribe(
            (data) => {
              sessionStorage.setItem('employeeDetails',JSON.stringify(data))
              this.router.navigate(['employee'])
              
            }
          )
        }
      },
      (error) => {
        console.log(error)
        this.invalid = true;
      }
    )
  }


}
