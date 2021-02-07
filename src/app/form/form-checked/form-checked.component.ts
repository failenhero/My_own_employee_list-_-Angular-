import { DbService } from './../../shared/services/db.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Department } from 'src/app/shared/interfaces';
import { StepService } from 'src/app/shared/services/step.service';
import { EmployeeService } from 'src/app/shared/services/employee.service';
import { Form, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-checked',
  templateUrl: './form-checked.component.html',
  styleUrls: ['./form-checked.component.scss']
})
export class FormCheckedComponent implements OnInit {

  depList: Department[] = [];
  formDep!: FormGroup;
  department!: string;

  constructor(
    private stepService: StepService,
    private router: Router,
    private dbService: DbService,
    private routes: ActivatedRoute,
    private employeeService: EmployeeService
  ) { }

  ngOnInit(): void {
    this.routes.data.subscribe( (response: any) => {
      this.depList = response.departments
    })

    this.formDep = new FormGroup({
      department: new FormControl(null, [
        Validators.required
      ])
    })
  }

  backClick(){
    this.router.navigate(['/profile']);
    this.stepService.serviceStepState$.next(1);
    this.stepService.initSteps();
  }

  forwardClick(){
    this.router.navigate(['/finished']);
    this.stepService.serviceStepState$.next(3);
    this.stepService.initSteps();

    this.department = this.formDep.get('department')?.value;
    this.employeeService.setDepartment(this.department);
  }


  //refreshDepList(): void {
  //  this.dbService.getDepList().subscribe( res => {
  //    this.depList = res;
  //  })
  //}

}
