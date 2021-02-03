import { Component, OnInit } from '@angular/core';
import { StepService } from '../shared/services/step.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private stepService: StepService
  ) { }

  ngOnInit(): void {
  }

  createNewForm(){
    this.stepService.serviceStepState$.next(2)
    this.stepService.initSteps()
  }

}
