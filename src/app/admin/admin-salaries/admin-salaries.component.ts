import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';

@Component({
  selector: 'app-admin-salaries',
  templateUrl: './admin-salaries.component.html',
  styleUrls: ['./admin-salaries.component.css']
})
export class AdminSalariesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  SalariesForm = this.formBuilder.group({
    salaryFrom : ['', Validators.required],
    salaryTo : ['', Validators.required]
  })

  get salaryFrom() {
    return this.SalariesForm.get('salaryFrom');
  }

  get salaryTo(){
    return this.SalariesForm.get('salaryTo')
  }

  onSubmit(employeesList: Employee[]){
    
  }

}
