import { Employee } from './../../shared/interfaces';
import { StepService } from './../../shared/services/step.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { DbService } from 'src/app/shared/services/db.service';

@Component({
  selector: 'app-form-finished',
  templateUrl: './form-finished.component.html',
  styleUrls: ['./form-finished.component.scss']
})
export class FormFinishedComponent implements OnInit {

  currentName!: string;
  currentDate!: string;
  currentDepartment!: string;

  newEmployee!: Employee;

  constructor(
    private router: Router,
    private stepService: StepService,
    private employeeService: EmployeeService,
    private dbService: DbService
  ) { }

  ngOnInit(): void {
    this.refreshVariables();
    this.newEmployee = this.employeeService.currentEmployee;
  }

  refreshVariables(){
    this.currentName = this.employeeService.currentEmployee.EmployeeName;
    this.currentDate = this.employeeService.currentEmployee.DateOfJoining;
    this.currentDepartment = this.employeeService.currentEmployee.Department;
  }

  backClick(){
    this.stepService.serviceStepState$.next(2);
    this.stepService.initSteps();
    this.router.navigate(['/checked']);
  }

  createNewEmployee(){
    let val={
      EmployeeName:this.newEmployee.EmployeeName,
      Department:this.newEmployee.Department,
      DateOfJoining:this.newEmployee.DateOfJoining
    }

    this.dbService.createNewEmployee(val).subscribe( res => {
      alert(res.toString());
    })

    this.stepService.serviceStepState$.next(4);
    this.stepService.initSteps();
    this.router.navigate(['/']);
  }

}
