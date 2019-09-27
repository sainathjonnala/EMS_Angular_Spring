import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { Role } from '../models/role';

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
        console.log(data);
        
        let role: Role = data.role;

        if (role.role_name == "admin") {
          this.router.navigate(['admin'])
        }
        else if(role.role_name == "employee"){
          this.router.navigate(['employee'])
        }
        else if(role.role_name == "manager"){
          this.router.navigate(['manager'])
        }
      },
      (error) => {
        console.log(error)
        this.invalid = true;
      }
    )
  }


}
