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

  constructor(
    private stepService: StepService
  ) {
    this.stepService.stepsStream$.subscribe((res) => {
      return this.steps = res;
    });
  }

  ngOnInit(): void {
    this.localInitSteps();
  }

  localInitSteps(){
    this.stepService.serviceStepState$.next(4)
    this.stepService.initSteps()
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
