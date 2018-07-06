import { Injectable } from '@angular/core';
import { ProcessItem } from '../../components/process-item';
import { StepOneComponent } from '../../components/step-one/step-one';
import { StepTwoComponent } from '../../components/step-two/step-two';
import { StepThreeComponent } from '../../components/step-three/step-three';

@Injectable()
export class ProcessProvider {
  private dumyJsonResponse = {
    item: [
      {
        step: 1,
        desc: 'migthy first step'
      },
      {
        step: 2,
        desc: 'always first looser'
      },
      {
        step: 3,
        items: [
          {
            step: 3,
            desc: 'i am the best step'
          },
          {
            step: 1,
            desc: 'migthy first step'
          }
        ]
      }
    ]
  }
  constructor() {

  }

  getProcessSteps(): ProcessItem[] {
    return this.getPageOrder(this.dumyJsonResponse.item);
  }

  private getPageOrder(steps): ProcessItem[] {
    let result: ProcessItem[] = [];

    for(let item of steps) {
      if(item.items) {
        result = result.concat(this.getPageOrder(item.items)); 
      } else {
        let comp = this.resolveComponentName(item.step);

        let newItem = new ProcessItem(comp, item.desc);
        result.push(newItem);
      }
    }
    return result;
  }

  private resolveComponentName(step) {
    if(step == 1) {
      return StepOneComponent
    } else if(step == 2) {
      return StepTwoComponent
    } else if(step == 3) {
      return StepThreeComponent
    }
  }

}
