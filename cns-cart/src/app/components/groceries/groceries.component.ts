import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.component.html',
  styleUrls: ['./groceries.component.css']
})
export class GroceriesComponent implements OnInit {
	groceries:any;
	email : any;
	reviews:any;
	emails:any;
	em : any;
	_a : any;
	show:any = 0;
  constructor(private firebaseService:FirebaseService) { }

  ngOnInit() {
	var user :any= firebase.auth().currentUser;
	if (user != null) {
	  this.email = user.email;	  
	} 
	this.firebaseService.getEmail().subscribe(emails => {
			console.log(emails+"emails");
			this.emails = emails;
		});
	 /* for (var _i = 0, _a = this.emails; _i < _a.length; _i++) {
             this.em = _a[_i];
             console.log(this.em.company+ "for email");
         } */
         
	console.log(this.email+"name");	   
		this.firebaseService.getGroceries().subscribe(groceries => {
			console.log(groceries + "test 1");
			this.groceries = groceries;
		});
		this.firebaseService.getReview().subscribe(reviews => {
			console.log(reviews+"reviews");
			this.reviews = reviews;
	  
	});
  } 
  shows(){
	  this.show = 1;
	  console.log(this.show+" show");
  }
}