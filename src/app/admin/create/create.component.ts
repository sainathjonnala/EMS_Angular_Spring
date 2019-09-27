import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormsModule} from '@angular/forms'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit() {
  }
  
  addEmployeeForm = this.formBuilder.group({
    firstname : [],
    lastname : [],
    email : [],
    employee_id : [],
    address : [],
    salary : [],
    department_id : [],
    manager_id : []
  })


}
