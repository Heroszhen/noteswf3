import { Component, OnInit } from '@angular/core';
import { FirstService } from '../../../myservices/first.service';

@Component({
  selector: 'app-poo',
  templateUrl: './poo.component.html',
  styleUrls: ['./poo.component.css']
})
export class PooComponent implements OnInit {

  constructor(private fs:FirstService) {
    this.fs.display$.next(["none"]); 
  }

  ngOnInit() {
  }
  showbm(){
    this.fs.display$.next(["play"]);
  }
}
