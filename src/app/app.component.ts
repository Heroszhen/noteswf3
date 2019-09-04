import { Component } from '@angular/core';
import { FirstService } from './myservices/first.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	bm="";
	connexion=this.isconnected();
	constructor(private fs:FirstService){
		// Initialize Firebase
		var config = {
			apiKey: "AIzaSyCQa_XPLQqg5f2nEhQfZwclQfDGHeU5qrw",
			authDomain: "login-a10d8.firebaseapp.com",
			databaseURL: "https://login-a10d8.firebaseio.com",
			projectId: "login-a10d8",
			storageBucket: "login-a10d8.appspot.com",
			messagingSenderId: "727533993019"
		};
		firebase.initializeApp(config);
	}
	ngOnInit() {
		this.fs.display$.subscribe(data=>{this.bm=data[0];});
		this.fs.connecte$.subscribe(data=>{this.connexion=data[0];});
		if(this.fs.getItem("connection")!==null)this.connexion=this.fs.getItem("connection").connected;
	}

	logout(){
		this.fs.signOutUser();
		this.fs.connecte$.next([false]);
		this.fs.setItem("connection",{"connected":false});
		this.connexion=false;
	}
	isconnected(){
		if(this.fs.getItem("connection")!==null)return this.fs.getItem("connection").connected ;
	}
}
