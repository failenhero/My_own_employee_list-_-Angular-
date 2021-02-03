import { Component, Input, OnInit } from '@angular/core';
import { Status, Step } from '../shared/interfaces';
import { StepStateService } from '../shared/step-state.service';

@Component({
  selector: 'app-step-bar',
  templateUrl: './step-bar.component.html',
  styleUrls: ['./step-bar.component.scss']
})
export class StepBarComponent implements OnInit {

  steps: Step[] = [];

  stepState!:number;


  constructor(
    private stepStateService: StepStateService
  ) {
    this.stepStateService.serviceStepState$.subscribe((res) => {
      return this.stepState = res;
    })
  }

  ngOnInit(): void {
    this.stepStateService.serviceStepState$.next(5)
    this.initSteps();
  }

  initSteps(){
    this.steps = [
      {
        Id: 1,
        Header: 'Profile',
        Status: Status.Done
      },
      {
        Id: 2,
        Header: 'Check <br> something',
        Status: Status.Active
      },
      {
        Id: 3,
        Header: 'Finish',
        Status: Status.Inactive
      }
    ]
  }

  start(){
    this.steps.forEach( (step) => {
      if(step.Id === this.stepState){
        return step.Status = Status.Active
      } else if(step.Id < this.stepState) {
        return step.Status = Status.Done
      } else {
        return step.Status = Status.Inactive
      }
    })
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
