import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';

import { HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirstService {
  display$ = new BehaviorSubject([]);
  connecte$ = new BehaviorSubject([]);
  actived$ = new BehaviorSubject([""]);
  country$ = new BehaviorSubject({});
  
	baseUrl = 'http://localhost:8080/api';
	chat:any[];
  getmessages$ = new BehaviorSubject([]);
  constructor(private http:HttpClient) {}
	
  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signInUser(email: string, password: string) {
    return new Promise(
      (resolve, reject) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signOutUser() {
    firebase.auth().signOut();
  } 
  
  getCountry(name:string){
	this.http.get("https://restcountries.eu/rest/v2/name/"+name).subscribe(
    onearray=>{this.country$.next(onearray);},
    error=>{console.log(error.status);}
    );
  }

  //localstorage
  setItem(key,value){
    localStorage.setItem(key,JSON.stringify(value));
  }

  getItem(key){
    return JSON.parse(localStorage.getItem(key));
  }

  removeItem(key){
    localStorage.removeItem(key);
  }
  
  //mysql
  private handleError(error: HttpErrorResponse) {
	  console.log(error);
	 
	  // return an observable with a user friendly message
	  return throwError('Error! something went wrong.');
	}

  getAll(): Observable<any[]> {
	  return this.http.get(`${this.baseUrl}/chat`).pipe(
		map((res) => {
		  this.chat = res['data'];
		  return this.chat;
	  }),
	  catchError(this.handleError));
	}
	
	store(message:{}): Observable<{}> {
		return this.http.post(`${this.baseUrl}/add`, message).pipe(
		  catchError(this.handleError)
		  );
		 
	}
	
}
