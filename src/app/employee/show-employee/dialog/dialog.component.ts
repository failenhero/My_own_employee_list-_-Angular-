import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Employee, Department } from 'src/app/shared/interfaces';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DbService } from 'src/app/shared/services/db.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})

export class DialogComponent implements OnInit {

  empForm: FormGroup |any;
  depList: Department[] = [];
  currentEmployee!: Employee;
  EmployeeID!: number|undefined;
  EmployeeName!: string;
  Department!: string;
  DateOfJoining!: string;
  PhotoFileName!: string;


  constructor(
    private employeeService: EmployeeService,
    private dbService: DbService
  ) { }

  ngOnInit(): void {
    this.currentEmployee = this.employeeService.currentEmployee;
    this.initLocalVariables();
    this.initDepList();
    this.initForm();
  }

  initLocalVariables(){
    this.EmployeeID = this.employeeService.currentEmployee.EmployeeID;
    this.EmployeeName = this.employeeService.currentEmployee.EmployeeName;
    this.Department = this.employeeService.currentEmployee.Department;
    this.DateOfJoining = this.employeeService.currentEmployee.DateOfJoining;
    this.PhotoFileName = this.employeeService.currentEmployee.PhotoFileName;
  }

  initDepList(){
    this.dbService.getDepList().subscribe(res => {
      this.depList = res;
    })
  }
  initForm(){
    this.empForm = new FormGroup({
      empName: new FormControl(null, [
        Validators.required
      ]),
      dateOfJoining: new FormControl(null, [
        Validators.required
      ]),
      department: new FormControl(null, [
        Validators.required
      ])
    })
  }

  editEmployee(){
    let val = {
      EmployeeID:this.EmployeeID,
      EmployeeName:this.EmployeeName,
      Department:this.Department,
      DateOfJoining:this.DateOfJoining,
      PhotoFileName:this.PhotoFileName
    }

    this.dbService.editEmployee(val).subscribe();

    location.reload();
  }

}
