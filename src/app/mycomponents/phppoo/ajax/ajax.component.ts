import { Component, OnInit } from '@angular/core';
import { FirstService } from '../../../myservices/first.service';

@Component({
  selector: 'app-ajax',
  templateUrl: './ajax.component.html',
  styleUrls: ['./ajax.component.css']
})
export class AjaxComponent implements OnInit {
	actived="";

  constructor(private fs:FirstService) {
	this.fs.display$.next(["none"]); 
  }

  ngOnInit() {
  }
  showbm(){
	this.fs.display$.next(["play"]);
  }
  
  activeA(v){
	this.actived=v;
  }
	nav(){
		var nav = document.querySelector("nav");
		if(nav.style.display=="block")nav.style.display="none";
		else nav.style.display = "block";
	}
	nav2(){
		var nav = document.querySelector("nav");
		nav.style.display = "block";
	}
}
