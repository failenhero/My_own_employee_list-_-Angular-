import { Component, OnInit } from '@angular/core';
import { StepStateService } from '../shared/step-state.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private stepStateService: StepStateService
  ) { }

  ngOnInit(): void {
  }

  createNewForm(){
    this.stepStateService.serviceStepState$.next(1)
  }

}
