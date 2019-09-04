import { Component, OnInit } from '@angular/core';
import { FirstService } from '../../myservices/first.service'; 

@Component({
  selector: 'app-phppoo',
  templateUrl: './phppoo.component.html',
  styleUrls: ['./phppoo.component.css']
})
export class PhppooComponent implements OnInit {
	
  constructor(private fs:FirstService) { }

  ngOnInit() {
  }
	hidebm(){
		this.fs.display$.next(["none"]);
	}
}
