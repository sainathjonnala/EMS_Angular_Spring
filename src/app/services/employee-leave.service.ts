import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Employee } from '../models/employee';
import { Leave } from '../models/leave';
import { LeaveBalance } from '../models/leave-balance';

@Injectable({
  providedIn: 'root'
})
export class EmployeeLeaveService {

  constructor(private httpClient: HttpClient) { }

  baseURL: string = "http://localhost:8181/EMS";

  getLeaveTransactions(employee_id: string): Observable<Leave[]>{
    return this.httpClient.get<Leave[]>(this.baseURL + "/leaveRequests/" + employee_id)
  }

  getAppliedLeaves(employee_id: string): Observable<Leave[]>{
    return this.httpClient.get<Leave[]>(this.baseURL + "/viewAppliedLeaves/" + employee_id)
  }

  getLeaveRequests(manager_id: string): Observable<Leave[]>{
    return this.httpClient.get<Leave[]>(this.baseURL + "/viewAppliedLeaves/" + manager_id)
  }

  getLeaveBalance(employee_id: string): Observable<LeaveBalance>{
    return this.httpClient.get<LeaveBalance>(this.baseURL + "/viewLeaveBalance/" + employee_id)
  }

  acceptLeave(leave: Leave): Observable<Leave>{
    return this.httpClient.post<Leave>(this.httpClient + "/acceptLeave" , leave).pipe(catchError(this.handler))
  }

  rejectLeave(leave: Leave): Observable<Leave>{
    return this.httpClient.put<Leave>(this.httpClient + "/rejectLeave" , leave).pipe(catchError(this.handler))
  }

  cancelLeave(leave: Leave): Observable<Leave>{
    return this.httpClient.put<Leave>(this.httpClient + "/cancelLeave" , leave).pipe(catchError(this.handler))
  }
  
  handler(error: HttpErrorResponse){
    return throwError(error.error.message || "Not Updated")
  }

}
