import { Component, OnInit } from '@angular/core';
import { FirstService } from '../../myservices/first.service';

@Component({
  selector: 'app-tchat',
  templateUrl: './tchat.component.html',
  styleUrls: ['./tchat.component.css']
})
export class TchatComponent implements OnInit {
	user;
	chat:any["dd"];
	error = '';
	success = '';
	message="";
	time;
  constructor(private fs:FirstService){
	this.fs.display$.next(['none']);
	this.user = this.fs.getItem("connection").name;
	this.getChat();
   }

  ngOnInit() {
	this.fs.getmessages$.subscribe(data=>{this.chat=data});
	 var fs=this.fs;
	function getChat2(){
		fs.getAll().subscribe(
		(res: any[]) => {
		  fs.getmessages$.next(res);
		},
		(err) => {
		  this.error = err;
		}
	  );
	}
	this.time=setInterval(getChat2,2000);
  }
  
  showbm(){
    this.fs.display$.next(["play"]);
  }
  
  getChat(): void {
	this.fs.getAll().subscribe(
		(res: any[]) => {
		  this.chat = res;
		},
		(err) => {
		  this.error = err;
		}
	  );
  }
  
  addComment() {
	if(this.message != ""){
		this.error = '';
		this.success = '';
		var array ={};
		array['name']=this.user;
		array['message']=this.message;
		
		this.fs.store(array).subscribe(
			(res) => {},
			(err) => this.error = err
		  );
	}
	this.message="";
  }
  
  killtime(){clearInterval(this.time);}
}
