import { Component, OnInit } from '@angular/core';
import { AngularFire} from 'angularfire2';
import { Router} from '@angular/router';
import {FirebaseService} from '../../services/firebase.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	email : any;
	emails:any;
  constructor(public af : AngularFire,private router : Router,private firebaseService:FirebaseService) { }

  ngOnInit() {
	  
  }
	
  login(){
	this.af.auth.login();
	var user :any= firebase.auth().currentUser;
	

	if (user != null) {
	  this.email = user.email;	  
	} 
	this.firebaseService.getEmail().subscribe(emails => {
			console.log(emails+"emails");
			this.emails = emails;
		});
	
  }
  logout(){
	this.af.auth.logout();
	this.router.navigate(['/']);
  }  
}