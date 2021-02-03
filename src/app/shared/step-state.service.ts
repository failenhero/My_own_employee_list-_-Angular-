import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StepStateService {

  public serviceStepState$: Subject<number> = new Subject<number>();

  actualStepState!: number;

  constructor() { }


}
