import { Component, OnInit } from '@angular/core';
import { DbService } from '../shared/services/db.service';
import { StepService } from '../shared/services/step.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private stepService: StepService,
    private db: DbService
  ) { }

  ngOnInit(): void {
  }

  createNewForm(){
    this.stepService.serviceStepState$.next(1)
    this.stepService.initSteps()
  }

}
