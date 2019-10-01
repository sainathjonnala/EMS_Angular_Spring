import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-admin-manager-employees',
  templateUrl: './admin-manager-employees.component.html',
  styleUrls: ['./admin-manager-employees.component.css']
})
export class AdminManagerEmployeesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  ManagerForm = this.formBuilder.group({
    manager_id : ['', Validators.required]
  })

  get manager_id() {
    return this.ManagerForm.get('manager_id');
  }

  onSubmit(employeesList: Employee[]){
    
  }

}
