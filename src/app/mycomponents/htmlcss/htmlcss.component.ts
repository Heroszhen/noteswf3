import { Component, OnInit } from '@angular/core';
import { FirstService } from '../../myservices/first.service';

@Component({
  selector: 'app-htmlcss',
  templateUrl: './htmlcss.component.html',
  styleUrls: ['./htmlcss.component.css']
})
export class HtmlcssComponent implements OnInit {
	actived="" ;
  constructor(private fs:FirstService) {
	this.fs.actived$.subscribe(data=>{this.actived=data[0];});
   }

  ngOnInit() {
  }
	
	activeA(c){
		this.actived=c;
	}
}
