import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-salaries',
  templateUrl: './admin-salaries.component.html',
  styleUrls: ['./admin-salaries.component.css']
})
export class AdminSalariesComponent implements OnInit {
  
  isEmpty: boolean;
  employeesList: Employee[];
  displayForm: boolean = false;

  constructor(private formBuilder: FormBuilder, private adminService: AdminService) { }

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

  onSubmit(){
    
    this.adminService.getSalaries(this.SalariesForm.value.salaryFrom, this.SalariesForm.value.salaryTo).subscribe(
      (data) => {
        console.log(data);   
        if(data.length > 0){
        this.employeesList = data;
        this.displayForm = true;
        this.isEmpty = false;
        }
        else{
          this.displayForm = false;
          this.isEmpty = true;
        }
      }
    )
  }

}
