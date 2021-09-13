import { Component, OnInit, VERSION } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  datas: Observable<any>;
  numbers: number = 0;
  

  ngOnInit() {
    const personalObservable =  new Observable(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count++);
      }, 1000)
    })

    personalObservable.subscribe(data => {
      console.log(data)
    })
  }


  
}
