import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-manager-employees',
  templateUrl: './admin-manager-employees.component.html',
  styleUrls: ['./admin-manager-employees.component.css']
})
export class AdminManagerEmployeesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private adminService: AdminService) { }

  ngOnInit() {
  }

  employeesList: Employee[];
  displayTable: boolean = false;
  isEmpty: boolean = false;


  ManagerForm = this.formBuilder.group({
    manager_id : ['', Validators.required]
  })

  get manager_id() {
    return this.ManagerForm.get('manager_id');
  }

  onSubmit(){
    this.adminService.getManagerEmployees(this.ManagerForm.value.manager_id).subscribe(
      (data) => {
        if(data != null){
          console.log(data)
          this.employeesList = data;
          this.displayTable = true;
          this.isEmpty = false;
        }
        else{
          this.displayTable = false;
          this.isEmpty = true;
        }
      },
      (error) => {
        
      }
    )
    
  }

}
