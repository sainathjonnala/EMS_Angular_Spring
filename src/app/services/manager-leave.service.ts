import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Leave } from '../models/leave';
import { LeaveBalance } from '../models/leave-balance';

@Injectable({
  providedIn: 'root'
})
export class ManagerLeaveService {

  constructor(private httpClient: HttpClient) { }

  baseURL: string = "http://localhost:8181/EMS";

  applyLeave(leave: Leave): Observable<boolean>{
    return this.httpClient.post<boolean>(this.baseURL + "/applyLeave" , leave)
  }

  getLeaveTransactions(employee_id: string): Observable<Leave[]>{
    return this.httpClient.get<Leave[]>(this.baseURL + "/leaves/" + employee_id)
  }

  getAppliedLeaves(employee_id: string): Observable<Leave[]>{
    return this.httpClient.get<Leave[]>(this.baseURL + "/appliedLeaves/" + employee_id)
  }

  getLeaveRequests(manager_id: string): Observable<Leave[]>{
    return this.httpClient.get<Leave[]>(this.baseURL + "/leaveRequests/" + manager_id)
  }

  getLeaveBalance(employee_id: string): Observable<LeaveBalance>{
    return this.httpClient.get<LeaveBalance>(this.baseURL + "/leaveBalance/" + employee_id)
  }

  acceptLeave(leave: Leave): Observable<boolean>{
    return this.httpClient.put<boolean>(this.baseURL + "/acceptLeave" , leave).pipe(catchError(this.handler))
  }

  rejectLeave(leave: Leave): Observable<boolean>{
    return this.httpClient.put<boolean>(this.baseURL + "/rejectLeave" , leave).pipe(catchError(this.handler))
  }

  cancelLeave(leave: Leave): Observable<boolean>{
    return this.httpClient.put<boolean>(this.baseURL + "/cancelLeave" , leave).pipe(catchError(this.handler))
  }
  
  handler(error: HttpErrorResponse){
    return throwError(error.error.message || "Not Updated")
  }
}
