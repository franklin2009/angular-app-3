import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  isPlay:boolean;
  slider:number;
  banners:any[];
  time:number;
  interval:any;

  constructor() {
    this.isPlay=true;
    this.slider=0;
    this.time=2000;
    //photo-1558981806-ec527fa84c39 | photo-1416339306562-f3d12fefd36f | photo-1641667599829-0b6d0c92581c | photo-1641573514300-729704c72d15 | photo-1642773156765-6f5e392dec03 | photo-1642698425808-9211f21ecc93
    this.banners=[
      { id:1, title:'Services1', subtitle:'Multimedia products1', description:'Atractive designs for your brand1', link:{ title:'Contact us1', url:'http://google.com'}, 
        img:'https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
      { id:2, title:'Services2', subtitle:'Multimedia products2', description:'Atractive designs for your brand2', link:null, 
        img:'https://images.unsplash.com/photo-1416339306562-f3d12fefd36f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
      { id:3, title:'Services3', subtitle:'Multimedia products3', description:'Atractive designs for your brand3', link:{ title:'Contact us3', url:'http://google.com'}, 
        img:'https://images.unsplash.com/photo-1641573514300-729704c72d15?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
    ];
   }

  ngOnInit(): void {
    this.interval = setInterval(() => {
      if(this.isPlay){ this.next(); }
    }, this.time);
  }

  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  setPlay(isPlay:boolean): void{
    this.isPlay=isPlay;
  }

  next():void{
    this.slider=(this.slider < this.banners.length -1 ? this.slider + 1 : 0);
  }

}
