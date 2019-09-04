import { Component, OnInit } from '@angular/core';
import { FirstService } from '../../myservices/first.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
	actived ='';
  constructor(private fs:FirstService) {
    this.fs.display$.next(['none']);
  }

  ngOnInit() {
  }
	
	changeActived(v){
		this.actived = v;
	}
	
	showbm(){
	this.fs.display$.next(["play"]);
  }
}
