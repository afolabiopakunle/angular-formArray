import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  datas: Observable<any>;
  
 data = new Observable(observer => {
    setInterval(() => {
      observer.next("Hello World!")
    }, 2000);

    setTimeout(() => {
      observer.unsubscribe()
    }, 4000)
  })
  
  .subscribe(result => console.log(result))
  
  // .unsubscribe();



  
}
