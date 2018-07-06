import { Component, Input } from '@angular/core';
import { ProcessComponent } from '../process';

@Component({
  selector: 'step-two',
  templateUrl: 'step-two.html'
})
export class StepTwoComponent implements ProcessComponent {

  @Input() data: any;

  constructor() {

  }

}
