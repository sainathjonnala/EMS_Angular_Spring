import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  AddEmployeeForm = this.formBuilder.group({

    last_name : ['', Validators.required ],
    first_name : ['', Validators.required ],
    email: ['', Validators.required, Validators.email ],
    address : ['', Validators.required ],
    employee_id : ['', Validators.required ],
    salary : ['', Validators.required ],
    department_id : ['', Validators.required ],
    role_id : ['', Validators.required ],
    manager_id : ['', Validators.required ]
  })

  get last_name() {
    return this.AddEmployeeForm.get('last_name');
  }
  
  get first_name() {
    return this.AddEmployeeForm.get('first_name');
  }
  
  get email() {
    return this.AddEmployeeForm.get('email');
  }
  
  get address() {
    return this.AddEmployeeForm.get('address');
  }
  
  get employee_id() {
    return this.AddEmployeeForm.get('employee_id');
  }
  
  get department_id() {
    return this.AddEmployeeForm.get('department_id');
  }
  
  get role_id() {
    return this.AddEmployeeForm.get('role_id');
  }
  
  get manager_id() {
    return this.AddEmployeeForm.get('manager_id');
  }

  get salary() {
    return this.AddEmployeeForm.get('salary');
  }

  onSubmit(employee : Employee){
    console.log(employee)
  }
}
