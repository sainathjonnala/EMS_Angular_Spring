import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Login } from '../models/login';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from '../models/employee';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient) { }

  baseURL: string = "http://localhost:8181/EMS"

  userValidation(loginCredentials: Login): Observable<Login>{
    return this.httpClient.post<Login>(this.baseURL + "/login",loginCredentials).pipe(catchError(this.handler))
  }
  handler(error: HttpErrorResponse) {
    // error.error.message = undefined
    return throwError(error.error.message || "No User Found")
  }

  getUser(loginCredentials: Login): Observable<Employee>{
    return this.httpClient.get<Employee>(this.baseURL+ "/user/" + loginCredentials.username)
  }
}
