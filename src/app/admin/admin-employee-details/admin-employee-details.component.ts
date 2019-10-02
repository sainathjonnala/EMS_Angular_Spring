import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-employee-details',
  templateUrl: './admin-employee-details.component.html',
  styleUrls: ['./admin-employee-details.component.css']
})
export class AdminEmployeeDetailsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private adminService: AdminService) { }

  ngOnInit() {
  }

  displayForm: boolean = false; 
  employee: Employee;
  notExist: boolean = false;


  EmployeeForm = this.formBuilder.group({
    employee_id : ['', Validators.required]
  })

  get employee_id(){
    return this.EmployeeForm.get('employee_id');
  }
  onSubmit(){
  
    this.adminService.getEmployee(this.EmployeeForm.value.employee_id).subscribe(
      (data) => {
        if( data != null ){
        this.displayForm = true;
        this.employee = data;
        }
      },
      (error) => {
        this.displayForm = false;
        this.notExist = true;
      }
    )
  }
}
