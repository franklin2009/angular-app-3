import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-term',
  templateUrl: './term.component.html',
  styleUrls: ['./term.component.css']
})
export class TermComponent implements OnInit {

  isPlus:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }

  plus():void{
    this.isPlus=!this.isPlus;
  }

}
