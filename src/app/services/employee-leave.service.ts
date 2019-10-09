import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Leave } from '../models/leave';
import { LeaveBalance } from '../models/leave-balance';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeLeaveService {

  constructor(private httpClient: HttpClient) { }

  baseURL: string = "http://localhost:8181/EMS";

  applyLeave(leave: Leave): Observable<boolean>{
    return this.httpClient.post<boolean>(this.baseURL + "/applyLeave" , leave)
  }

  getLeaveTransactions(employee_id: string): Observable<Leave[]>{
    return this.httpClient.get<Leave[]>(this.baseURL + "/viewLeaves/" + employee_id)
  }

  getAppliedLeaves(employee_id: string): Observable<Leave[]>{
    return this.httpClient.get<Leave[]>(this.baseURL + "/viewAppliedLeaves/" + employee_id)
  }
  
  getLeaveBalance(employee_id: string): Observable<LeaveBalance>{
    return this.httpClient.get<LeaveBalance>(this.baseURL + "/viewLeaveBalance/" + employee_id)
  }

  cancelLeave(leave: Leave): Observable<boolean>{
    return this.httpClient.put<boolean>(this.baseURL + "/cancelLeave" , leave).pipe(catchError(this.handler))
  }
  
  handler(error: HttpErrorResponse){
    return throwError(error.error.message || "Not Updated")
  }

}
