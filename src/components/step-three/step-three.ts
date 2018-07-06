import { Component, Input } from '@angular/core';
import { ProcessComponent } from '../process';

/**
 * Generated class for the StepThreeComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'step-three',
  templateUrl: 'step-three.html'
})
export class StepThreeComponent implements ProcessComponent {

  @Input() data: any;

  constructor() {

  }

}
