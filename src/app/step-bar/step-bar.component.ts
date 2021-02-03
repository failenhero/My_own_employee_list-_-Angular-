import { Component, Input, OnInit } from '@angular/core';
import { Status, Step } from '../shared/interfaces';
import { StepService } from '../shared/services/step.service';

@Component({
  selector: 'app-step-bar',
  templateUrl: './step-bar.component.html',
  styleUrls: ['./step-bar.component.scss']
})
export class StepBarComponent implements OnInit {

  steps: Step[] = [];

  stepState!:number;


  constructor(
    private stepService: StepService
  ) {

    this.stepService.serviceStepState$.subscribe((res) => {
      return this.stepState = res;
    })

    this.stepService.stepsStream$.subscribe((res) => {
      return this.steps = res;
    })

  }

  ngOnInit(): void {
    //this.stepStateService.serviceStepState$.next(1)
    this.initSteps();
  }

  initSteps(){
  //  this.steps = [
  //    {
  //      Id: 1,
  //      Header: 'Profile',
  //      Status: Status.Done
  //    },
  //    {
  //      Id: 2,
  //      Header: 'Check <br> something',
  //      Status: Status.Active
  //    },
  //    {
  //      Id: 3,
  //      Header: 'Finish',
  //      Status: Status.Inactive
  //    }
  //  ]
    this.stepService.serviceStepState$.next(4)
    this.stepService.initSteps()
    //this.steps = this.stepStateService.steps;


  }

  start(){
    //this.steps.forEach( (step) => {
    //  if(step.Id === this.stepState){
    //    return step.Status = Status.Active
    //  } else if(step.Id < this.stepState) {
    //    return step.Status = Status.Done
    //  } else {
    //    return step.Status = Status.Inactive
    //  }
    //})
    this.stepService.serviceStepState$.next(1)
    this.stepService.initSteps()
    //this.steps = this.stepStateService.steps;

  }

  getClassName(status: Status){
    switch(status){
      case Status.Inactive:
        return 'inactive';
        break;

      case Status.Active:
        return 'active';
        break;

      case Status.Done:
        return 'done'
        break;
    }
  }

}
