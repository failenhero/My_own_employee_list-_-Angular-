import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Status, Step } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class StepService {

  public serviceStepState$: Subject<number> = new Subject<number>();
  public stepsStream$: Subject<Step[]> =  new Subject<Step[]>();

  steps: Step[] = [];
  stepState!: number;

  constructor() {
    this.serviceStepState$.subscribe( (res) => {
      return this.stepState = res;
    })
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

    this.steps.forEach( (step) => {
      if(step.Id === this.stepState){
        return step.Status = Status.Active
      } else if(step.Id < this.stepState) {
        return step.Status = Status.Done
      } else {
        return step.Status = Status.Inactive
      }
    })

    this.stepsStream$.next(this.steps)
  }

}
