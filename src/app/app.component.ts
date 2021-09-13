import { Component, OnInit, VERSION } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  data: Subscription;
  counter = 0;
  customObservable = new Observable(observer => {
    observer.next(1)
  })

  testFunct() {
    // let counter = 0;
    this.data = this.customObservable.subscribe((result: number) => {
      this.counter++
      console.log(this.counter);
    })
  }

  closeFunct() {

  }

}
