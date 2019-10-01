import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-admin-employee-details',
  templateUrl: './admin-employee-details.component.html',
  styleUrls: ['./admin-employee-details.component.css']
})
export class AdminEmployeeDetailsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  EmployeeForm = this.formBuilder.group({
    employee_id : ['', Validators.required]
  })

  get employee_id(){
    return this.EmployeeForm.get('employee_id');
  }
  onSubmit(employee: Employee){

  }
}
