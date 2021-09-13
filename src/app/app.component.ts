import { Component, OnInit, VERSION } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  datas: Subscription;
  numbers: number = 0;
  


Observer =  new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count++);
      }, 1000)
    })


testFunct() {
  this.datas = this.Observer.subscribe(data => {
    console.log(data)
  })
}


  
}
