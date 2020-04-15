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
  array = [];
  tempString = ""
  klikButton(dataA,dataB){
    this.a = dataA;
    this.b = dataB;
    this.data = Math.pow(this.a,this.b)
    this.temp = Math.pow(this.a,this.b);
    this.temp = this.temp % 2;
    if(this.temp == 0){
      for(var i = this.b; i <= this.data; i++){
        for(var j = 0; j < i; j++){
          this.tempString = this.tempString + '*';
        }
        this.array.push(this.tempString);
        this.tempString = "";
      }
    }
    else if(this.temp == 1){
      for(var i = 1; i <= this.b; i++){
        for(var j = this.b; j >= i; j--){
          this.tempString = this.tempString + '*';
        }
        for(var k = this.a; k > this.a-i; k--){
          this.tempString = this.tempString + 'o';
        }
        this.array.push(this.tempString);
        this.tempString = "";
      }
    }
  };
  clear(){
    this.data = 0;
    this.a = 0;
    this.b = 0;
    this.temp = 3;
    this.array = [];
  }
  
}
