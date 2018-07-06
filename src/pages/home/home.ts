import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ImageLoader } from 'ionic-image-loader';
import { ProcessProvider } from '../../providers/process/process';
import { ProcessComponent } from '../../components/process';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users = [];
  jsonData = null;
  @ViewChild('processContainer', { read: ViewContainerRef }) container;
  constructor(public navCtrl: NavController,
     private http: HttpClient,
     private imgloader: ImageLoader,
     private processProvider: ProcessProvider,
     private resolve: ComponentFactoryResolver) {

  }
  ionViewDidLoad() {
    let steps = this.processProvider.getProcessSteps();

    console.log('steps: ', steps);
    for(let step of steps) {
      const factory = this.resolve.resolveComponentFactory(step.component);
      let componentRef = this.container.createComponent(factory);
     (<ProcessComponent>componentRef.instance).data = step.desc;
    }
  }

  loadData() {
    if(!this.jsonData) {
      this.http.get('https://randomuser.me/api/?results=100')
          .subscribe(res => {
            this.users = res['results'];
            this.jsonData = res['results'];
          });
    } else {
      this.users = [];
      setTimeout(() => {
        this.users = this.jsonData;
      }, 1000);
    }
  }

  clearCache(ev) {
    this.imgloader.clearCache();
    ev.complete(); 
  }

  onImageLoad(event) {
    console.log('image ready!');
  }

}
