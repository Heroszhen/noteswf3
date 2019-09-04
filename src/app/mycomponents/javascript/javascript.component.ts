import { Component, OnInit } from '@angular/core';
import { FirstService } from '../../myservices/first.service';
@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {
	actived=""
	actived2="";
  constructor(private fs:FirstService) {
    this.fs.display$.next(['none']);
    this.fs.actived$.subscribe(data=>{this.actived=data[0]});
   }

  ngOnInit() {
  }
  
  showbm(){
    this.fs.display$.next(["play"]);
  }

  menu(){
    var menu = document.querySelector('nav');
    if(menu.style.display!="block")menu.style.display="block";
    else menu.style.display="none";
  }

  onResize(event) {
    var menu = document.querySelector('nav');
    if(event.target.innerWidth<=769) menu.style.display="none";
    else menu.style.display="block";
  }
  
  changeActived(v){
	this.actived = v;
  }
  
  changeActived2(v){
	if(this.actived2 == v)this.actived2="";
	else this.actived2=v;
  }
}
