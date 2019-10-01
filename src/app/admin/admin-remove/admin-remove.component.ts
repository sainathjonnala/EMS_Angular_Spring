import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-admin-remove',
  templateUrl: './admin-remove.component.html',
  styleUrls: ['./admin-remove.component.css']
})
export class AdminRemoveComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  RemoveEmployeeForm = this.formBuilder.group({
    employee_id : ['', Validators.required]
  })

  get employee_id(){
    return this.RemoveEmployeeForm.get('employee_id');
  }

  onSubmit(employee: Employee){
    console.log(employee)
  }

}
