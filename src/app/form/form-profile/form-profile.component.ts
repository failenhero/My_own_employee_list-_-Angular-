import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { StepService } from 'src/app/shared/services/step.service';

@Component({
  selector: 'app-form-profile',
  templateUrl: './form-profile.component.html',
  styleUrls: ['./form-profile.component.scss']
})
export class FormProfileComponent implements OnInit {

  empForm: FormGroup |any;

  currentEmpName!: string;
  currentDateOfJoining!: string;

  constructor(
    private stepService: StepService,
    private router: Router,
    private employeeService: EmployeeService,
  ) { }

  ngOnInit(): void {
    this.empForm = new FormGroup({
      empName: new FormControl(null, [
        Validators.required
      ]),
      dateOfJoining: new FormControl(null, [
        Validators.required
      ])
    })
  }

  backClick(){
    this.router.navigate(['/']);
    this.stepService.serviceStepState$.next(4);
    this.stepService.initSteps();
  }

  forwardClick(){
    let empName = this.empForm.value.empName;
    let dateOfJoining = this.empForm.value.dateOfJoining;

    empName.trim();
    dateOfJoining.trim();
    this.employeeService.setNameAndDate(empName, dateOfJoining);

    this.router.navigate(['/checked']);
    this.stepService.serviceStepState$.next(2);
    this.stepService.initSteps();

  }

}
