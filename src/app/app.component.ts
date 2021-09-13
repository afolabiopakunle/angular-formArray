import { Component, VERSION } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  datas: Observable<any>;
  numbers: number = 0;
  
 data = new Observable(observer => {
    setInterval(() => {
      observer.next(this.numbers++)
    }, 2000);

  }).subscribe(result => {
    // this.numbers++
    console.log(this.numbers)
  })
  
  // .unsubscribe();
clicked() {
  this.data.unsubscribe()
}


  
}
