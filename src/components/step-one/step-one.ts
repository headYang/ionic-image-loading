import { Component, Input } from '@angular/core';


@Component({
  selector: 'step-one',
  templateUrl: 'step-one.html'
})
export class StepOneComponent {

  @Input() data: any;

  constructor() {

  }

}
