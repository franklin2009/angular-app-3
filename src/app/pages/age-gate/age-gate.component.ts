import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {IDate} from './../../shared/interface/IDate';
import {IMonth} from './../../shared/interface/IMonth';
import DMonths  from './../../shared/tools/Months';

@Component({
  selector: 'app-age-gate',
  templateUrl: './age-gate.component.html',
  styleUrls: ['./age-gate.component.css']
})
export class AgeGateComponent implements OnInit {

  typeGate:string; // btn-yes | date-full, date-year, date-full-select, date-full-step
  isBtnYes:boolean;
  showRemember:boolean;
  showTerms:boolean;
  urlRediret:string;
  urlHome:string;
  ageMin:number;
  months:IMonth[];
  stepDate:number;
  stepText:string[];
  dateRecord:IDate;

  constructor(public router: Router) { 
    this.isBtnYes=false;
    this.dateRecord={year:null, month:0, day:null};
    this.showRemember=false;
    this.showTerms=false;
    this.typeGate="btn-yes"; 
    this.urlRediret="http://google.com";
    this.urlHome="";
    this.ageMin=18;
    this.stepDate=1;
    this.stepText=['Dia','Mes','Año'];
    this.months=DMonths;
  }

  ngOnInit(): void {
    let isAgeGateOk=false;
    if(isAgeGateOk){
      console.log("isAgeGateOk  Va al Home");
    }
  }

  btnChangeState(state:boolean):void{
    this.isBtnYes=state;
  }
  
  btnUpdateStep(step:number):void{
    if((step > 0 && this.stepDate <= 2) || (step < 0 && this.stepDate >= 2)){
      this.stepDate+=step;
    }
  }

  btnAccept():void{
    switch(this.typeGate){
        case 'btn-yes':  
                    this.toRedirect(this.isBtnYes);
                  break;
        case 'date-year': 
                  const dateNow = new Date();
                  const year=(this.dateRecord.year==null || this.dateRecord.year > dateNow.getFullYear() ? 0 : Number(this.dateRecord.year));
                  const age = dateNow.getFullYear() - year;
                  if(year > 0){
                    this.toRedirect(age < this.ageMin);
                  } else {
                    console.log("año invalido");
                  }
                  break;
        case 'date-full':
        case 'date-full-select':
        case 'date-full-step':
                  if(this.isValidDate()){
                    this.toRedirect(this.isValidAge());
                  }
                  break;
        default:  break;
    }
  }


  isValidDate():boolean{
    let isValid=true;
    const dateNow = new Date();
    let maxDay=31;
    let date:IDate={
      year:(this.dateRecord.year==null || this.dateRecord.year > dateNow.getFullYear() ? 0 : this.dateRecord.year),
      month:(this.dateRecord.month==null || this.dateRecord.month > 12 ? 0 : this.dateRecord.month),
      day:(this.dateRecord.day==null || this.dateRecord.day > 31 ? 0 : this.dateRecord.day)
    };
    if(date.year==0 || date.month==0 || date.day==0){
      console.log("Fecha invalida");
      this.stepDate=(date.day==0 ? 1 : date.month==0 ? 2: date.year==0 ? 3: 3);
      isValid=false;
    } else{
        maxDay=(new Date(Number(date.year), Number(date.month), 0)).getDate();
        if(Number(date.day) > maxDay){
          console.log("Dia invalido");
          this.stepDate=1;
          isValid=false;
        }
    }
    return isValid;
  }


  isValidAge():boolean{
    let isValid=true;
    const dateNow = new Date();
    const year = dateNow.getFullYear();
    const month = dateNow.getMonth();
    const day = dateNow.getDate();
    let age = year - Number(this.dateRecord.year);
    if (month < Number(this.dateRecord.month) -1) {
      age--;
    }
    if (((Number(this.dateRecord.month) - 1) == month) && (day < Number(this.dateRecord.day))) {
      age--;
    }
    if(age < this.ageMin) isValid=false;
    return isValid;
  }

  toRedirect(isHome:boolean):void{
    if(isHome){
      console.log("hay que redirecciona a home");
      this.router.navigate([this.urlHome]);
    } else {
      console.log("hay que redirecciona a default");
      window.location.href=this.urlRediret;
    }
  }

}
