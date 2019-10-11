import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

  employee: Employee;
  isAdded: String;

  constructor(private formBuilder: FormBuilder, private adminService : AdminService) { }

  ngOnInit() {
  }

  AddEmployeeForm = this.formBuilder.group({

    last_name : ['', Validators.required ],
    first_name : ['', Validators.required ],
    email: ['', [Validators.required, Validators.email]],
    address : ['', [Validators.required, Validators.maxLength(20)] ],
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

  onSubmit(){
    this.employee = {

      last_name  : this.AddEmployeeForm.value.last_name,
      first_name : this.AddEmployeeForm.value.first_name,
      employee_id : this.AddEmployeeForm.value.employee_id,
      salary : this.AddEmployeeForm.value.salary,
      address : this.AddEmployeeForm.value.address,
      email : this.AddEmployeeForm.value.email,
      department : {
        department_id : this.AddEmployeeForm.value.department_id,
        department_name : ""
      },
      login : {
        username : "",
        password : "",
        role : {
          role_id : this.AddEmployeeForm.value.role_id,
          role_name : "",
        }
      },
      manager_id : this.AddEmployeeForm.value.manager_id
    }
    
    this.adminService.addUser(this.employee).subscribe((data) =>{
      
      if(data.valueOf()){
        this.isAdded = 'true';
      }
      else{
        this.isAdded = 'false';
      }
    }, (error) =>{
      this.isAdded = 'false';
      }
    )
  }
}
