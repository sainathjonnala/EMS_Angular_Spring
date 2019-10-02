import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from '../models/employee';
import { Department } from '../models/department';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  baseURL: string = "http://localhost:8181/EMS";

  addUser(employee: Employee) : Observable<Employee>{
    return this.httpClient.post<Employee>(this.baseURL + "/createEmployee" , employee).pipe(catchError(this.handler))
  }

  removeUser(employee_id: string) : Observable<Employee>{
    return this.httpClient.delete<Employee>(this.baseURL + "/removeEmployee/" + employee_id).pipe(catchError(this.handler))
  }

  getEmployees() : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseURL + "/employees")
  }

  getDepartments() : Observable<Department[]>{
    return this.httpClient.get<Department[]>(this.baseURL + "/departments")
  }

  getEmployee(employee_id : string) : Observable<Employee>{
    return this.httpClient.get<Employee>(this.baseURL + "/employee/" + employee_id).pipe(catchError(this.notFound))
  }

  getManagerEmployees(manager_id: string) : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseURL + "/employeesOfManager/" + manager_id).pipe(catchError(this.notFound))
  }

  getSalaries(salaryFrom: number, salaryTo: number) : Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseURL + "/salaries/" + salaryFrom +"/" + salaryTo).pipe(catchError(this.notFound))
  }

  notFound(error: HttpErrorResponse) {
    return throwError(error.error.message || "Not exist")
  }

  handler(error: HttpErrorResponse){
    return throwError(error.error.message || "Error")
  }
  
}
