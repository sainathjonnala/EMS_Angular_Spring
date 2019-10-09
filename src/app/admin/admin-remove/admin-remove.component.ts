import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-remove',
  templateUrl: './admin-remove.component.html',
  styleUrls: ['./admin-remove.component.css']
})
export class AdminRemoveComponent implements OnInit {

  isRemoved: String;

  constructor(private formBuilder: FormBuilder, private adminService: AdminService) { }

  ngOnInit() {
  }

  employee: Employee;

  RemoveEmployeeForm = this.formBuilder.group({
    employee_id : ['', Validators.required]
  })

  get employee_id(){
    return this.RemoveEmployeeForm.get('employee_id');
  }

  onSubmit(){
    this.adminService.removeUser(this.RemoveEmployeeForm.value.employee_id).subscribe(
      (data) => {
        console.log(data);
        if(data.valueOf()){
          this.isRemoved = 'true';
        }
        else{
          this.isRemoved = 'false';
        }
      }
    )
  }
}
