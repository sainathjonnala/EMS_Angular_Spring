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

        let role: Role = data.role;

        if (role.role_name == "admin") {
          this.router.navigate(['admin'])
        }
      },
      (error) => {
        console.log(error)
      }
    )
  }


}
