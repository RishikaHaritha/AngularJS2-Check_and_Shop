import { Component, OnInit } from '@angular/core';
import { AngularFire} from 'angularfire2';
import { Router} from '@angular/router';
import {FirebaseService} from '../../services/firebase.service';
import * as firebase from 'firebase';
import { FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
	email : any;
	emails:any;
    constructor(public af : AngularFire,
				private router : Router,
				private firebaseService:FirebaseService,
				public flashMessage : FlashMessagesService) { }
	//ngOnInit executes first on page load
    ngOnInit() {	  
	}
	//to login
	login(){		
		this.af.auth.login();	
	}
	//to logout 
	logout(){
		this.af.auth.logout();
		this.flashMessage.show("You are logged out",{cssClass :'alert-success',timeout:3000});
		this.router.navigate(['/']);
	}  
}