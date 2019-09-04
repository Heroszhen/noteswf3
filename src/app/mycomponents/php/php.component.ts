import { Component, OnInit } from '@angular/core';
import { FirstService } from '../../myservices/first.service';

@Component({
  selector: 'app-php',
  templateUrl: './php.component.html',
  styleUrls: ['./php.component.css']
})
export class PhpComponent implements OnInit {
  actived='';
  
  constructor(private fs:FirstService) {
    this.fs.display$.next(['none']);
    this.fs.actived$.subscribe(data=>{this.actived=data[0]});
   }

  ngOnInit() {
  }
	showbm(){
    this.fs.display$.next(["play"]);
  }

  changeActived(v){
    this.actived=v;
  }
}
