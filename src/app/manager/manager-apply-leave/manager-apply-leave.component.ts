import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeLeaveService } from 'src/app/services/employee-leave.service';
import { Leave } from 'src/app/models/leave';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-manager-apply-leave',
  templateUrl: './manager-apply-leave.component.html',
  styleUrls: ['./manager-apply-leave.component.css']
})
export class ManagerApplyLeaveComponent implements OnInit {
  leave: Leave;
  employee: Employee;

  constructor(private formBuilder: FormBuilder, private leaveService: EmployeeLeaveService) { }

  ngOnInit() {
    this.employee = JSON.parse(sessionStorage.getItem('managerDetails'))
  }

  ApplyLeaveForm = this.formBuilder.group({
    leave_type : [''],
    from_date: ['', Validators.required],
    to_date: ['', Validators.required],
    apply_to: ['',],
    reason: [''],
  })

  get leave_type(){
    return this.ApplyLeaveForm.get('leave_type');
  }

  get from_date(){
    return this.ApplyLeaveForm.get('from_date');
  }

  get to_date(){
    return this.ApplyLeaveForm.get('to_date');
  }
  
  onSubmit(){
    this.leave = {
      leave_type : this.ApplyLeaveForm.value.leave_type,
      apply_to : this.employee.manager_id,
      from_date: this.ApplyLeaveForm.value.from_date,
      to_date: this.ApplyLeaveForm.value.to_date,
      status: 'pending',
      employee: this.employee,
      reason: this.ApplyLeaveForm.value.reason
    }
    console.log(this.leave);
    this.leaveService.applyLeave(this.leave).subscribe(
      (data) => {
        console.log(data)
      }
    ) 
  }

}
