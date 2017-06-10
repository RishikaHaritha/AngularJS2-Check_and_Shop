import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import { Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {
	email :  any;
	carts : any;
	cart : any;
	quantity : any;
	tprice : any;
	sum : any = 0;
	price : any = 0;
	emptycart : any = 0;
	deletea :any ;
	myList:any = [];
	priceList:any = [];
	quantityList:any = [];
	len : any;
	lenn : any;
	sumzero = 0;
	constructor(private firebaseService : FirebaseService , 
				private router : Router , 
				private route : ActivatedRoute,
				public flashMessage : FlashMessagesService) { 
					this.deletea = false;
					this.sum = 0;
	}
	//ngOnInit loads first when the page is loaded
	ngOnInit() {
		//capturing the passed data from URL
		this.email = this.route.snapshot.params['id'];
		//requesting firebase to get all the items under the node carts
		this.firebaseService.getCart().subscribe(carts => {
			this.carts = carts;
			//console.log(carts+" carts");
		});
		   
	}
	//For calculation of totalbill
	totalBill(quantity,price){
		this.tprice = quantity*price;
		this.sum = this.sum + this.tprice;
		//console.log(this.sum+" sum");
	} 
	//after every loop to make the sum zero
	makeZero(){
		this.sum = 0;
	}
	//to delete each item seperately
	onDelete($key){
		//sends a specific key to firebaseService to delete it
		this.firebaseService.deleteCartItem($key);
		//console.log($key+" in on del");
	}
	//this function is to store keys of items which are in one user's cart
	enableDelete(email){
		this.myList.push(email);
		//console.log(this.myList+" del list");
		this.len = this.myList.length;
		//console.log(this.len+" del length");		
	}
	//deleteAll loops through every item in myList and deletes each of them
	deleteAll(){		
		this.len = this.myList.length;
		//console.log(this.len+" del length");
		while (this.len >= 0){
			this.onDelete(this.myList[this.len]);
			this.len = this.len - 1;
		}
		this.flashMessage.show("Your order is placed !",{cssClass :'alert-success',timeout:3000});
		this.router.navigate(['/groceries']);
	}
}