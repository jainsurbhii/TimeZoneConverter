import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countryList: Array<any> = [];
  name:any;
  timeNow:any
  comment:any
  notfound:any;
  
  constructor(){
    this.countryList = [
      { code: 1, countryName: "Canada" },
      { code: 2, countryName: "Australia" },
      { code: 3, countryName: "Germany" },
      { code: 4, countryName: "Brazil" },
      { code: 5, countryName: "China" },
      { code: 6, countryName: "United States" },
    ]
  }
  onCountrySelected(event:any){
    const d = new Date();
    const localTime = d.getTime();
    const localOffset = d.getTimezoneOffset() * 60000;
    const utc = localTime + localOffset;
if(event==="Canada"){
  const offset = -7; // UTC of Pacific Time is -07.00
  const canda = utc + (3600000 * offset);
  const CanadaTimeNow = new Date(canda).toLocaleString();
  this.timeNow=CanadaTimeNow;
  this.comment="UTC of Pacific Time is -07.00";
  
}
else if(event==="Australia"){
  const offset = +10; // UTC of Australia Eastern Time Zone is +10.00
  const australia = utc + (3600000 * offset);
  const australiaTimeNow = new Date(australia).toLocaleString();
  this.timeNow=australiaTimeNow;
}
else if(event==="Germany"){
  const offset = +2; // UTC of Central European Summer Time is +2.00
  const Germany = utc + (3600000 * offset);
  const GermanyTimeNow = new Date(Germany).toLocaleString();
  this.timeNow=GermanyTimeNow;
}
else if(event==="Brazil"){
  const offset = -4; // UTC of Amazon Time Time is -4.00
  const Brazil = utc + (3600000 * offset);
  const BrazilTimeNow = new Date(Brazil).toLocaleString();
  this.timeNow=BrazilTimeNow;
  
}
else if(event==="China"){
  const offset = +8; // UTC of China Standard Time is +8.00
  const China = utc + (3600000 * offset);
  const ChinaTimeNow = new Date(China).toLocaleString();
  this.timeNow=ChinaTimeNow;
}
else if(event==="United States"){ 
const offset = -5; 
const usa = utc + (3600000 * offset);
const TimeNow = new Date(usa).toLocaleString();
this.timeNow=TimeNow;
}
else{
  this.notfound="OOPS!!! Currently we Provide only these Country time zone Canada, Australia, Germany, Brazil, China, United States. ";
}
  }

}
