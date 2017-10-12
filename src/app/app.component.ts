import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Time Zone Display';
  time = new Date();
  flag = true;
  timezone: string = "";
  showTime(timezone){

  this.time = new Date();
  if (timezone === 'PST'){
    this.timezone = "PST";
  }
  if (timezone === 'MST'){
    this.timezone = "MST";
    this.time.setHours(this.time.getHours() + 1);
    console.log("MST time displaying");
    }
  if (timezone === 'CST'){
    this.timezone = "CST";
    this.time.setHours(this.time.getHours() + 2);
    console.log("CST time displaying");
    }
  if (timezone === 'EST'){
    this.timezone = "EST";
    this.time.setHours(this.time.getHours() + 3);
    console.log("EST time displaying");
    }
    this.flag = false;
  }
  clear(){
    this.time = null;
    this.flag = true;
    this.timezone = "";
  }
}
