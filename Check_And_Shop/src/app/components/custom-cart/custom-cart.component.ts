import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import { Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-custom-cart',
  templateUrl: './custom-cart.component.html',
  styleUrls: ['./custom-cart.component.css']
})
export class CustomCartComponent implements OnInit {
	id : any ;	
	customcarts : any;
	grocery : any;
	email :any;
	user : any;
	company : any;
	quantity : any;
	brand : any;
	groceries : any;
	companyList : any = [];
	quantityList : any = [];
	brandList : any = [];
	groceryList : any = [];
	priceList : any = [];
	len :  any;
	groceryC : any;
	emailC :any;
	companyC : any;
	quantityC : any;
	brandC : any;
	count : any = 0;
	constructor(private firebaseService : FirebaseService , 
				private router : Router , 
				private route : ActivatedRoute,
				public flashMessage : FlashMessagesService) { }
	//ngOnInit executes first on page load
	ngOnInit() {
		this.id = this.route.snapshot.params['id'];//to get id passed to this page
		var user1 :any= firebase.auth().currentUser;//to get current user
		if (user1 != null) {
			this.email = user1.email;
		}
		//to get all groceries  
		this.firebaseService.getGroceries().subscribe(groceries => {
			/*console.log(groceries + "test 1");*/
			this.groceries = groceries;
		});
		//to get all customcarts
		this.firebaseService.getcustomcart().subscribe(customcarts => {
			/*console.log(customcarts + "test 1");*/
			this.customcarts = customcarts;
		});			
	}
	//to delete custom key
	onCustomDelete($key){
		this.firebaseService.deleteCustom($key);
		/*console.log($key+" in on grocery del");*/
	}
	//to update quantity	
	updateQuantity($key){
		this.quantity = this.myFunction();//to get quantity
		let cart = {
			quantity : this.quantity
        }
		this.firebaseService.updatequantity($key,cart);
		this.flashMessage.show("Quantity updated!",{cssClass :'alert-success',timeout:2000});
		this.router.navigate(['/custom-cart/'+this.id]);
	}
	//to update quantity through alert box	
	myFunction() {
		var txt;
		var ip = prompt("Please enter quantity:");
			if (ip == null || ip == "") {
				alert("User cancelled the prompt.");
			} else {
				return ip;
			}   
	}
	//to add to cart
	addToCart(companyC, emailC, priceC,brandC , groceryC,quantityC ){
		let cart = {
			company : companyC,
			user : emailC,
			price : priceC,
			brand: brandC,
			grocery: groceryC,
			quantity:quantityC
		} 
		/*console.log(companyC + " after cart");*/
		this.firebaseService.addCart(cart);
		this.flashMessage.show(groceryC+"-"+companyC+"-"+brandC+" added to cart!",{cssClass :'alert-success',timeout:2000});  
	}
  
}