import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  a = 0;
  b = 0;
  data = 0;
  temp = 3;
  klikButton(dataA,dataB){
    this.a = dataA;
    this.b = dataB;
    this.data = Math.pow(this.a,this.b)
    this.temp = Math.pow(this.a,this.b);
    this.temp = this.temp % 2;
  };
  clear(){
    this.data = 0;
    this.a = 0;
    this.b = 0;
    this.temp = 3;
  }
  
}
