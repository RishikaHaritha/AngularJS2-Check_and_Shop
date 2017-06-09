import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import { Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';
import { FlashMessagesService} from 'angular2-flash-messages';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit {
  id : any ;
  groceries : any;
  reviews : any;
  grocery : any;
  email :any;
  user : any;
  company : any;
  review : any;
  companytoCart: any;
  emailtoCart: any;
  pricetoCart: any;
  brandtoCart: any;
  grocerytoCart: any;
  quantitytoCart: any;
  companytoCustom: any;
  emailtoCustom: any;
  brandtoCustom: any;
  grocerytoCustom: any;
  quantitytoCustom: any;
  quantity : any;
  constructor(private firebaseService : FirebaseService , private router : Router , private route : ActivatedRoute,public flashMessage : FlashMessagesService) { }

  ngOnInit() {
	  this.id = this.route.snapshot.params['id'];
	  this.firebaseService.getGroceries().subscribe(groceries => {
		this.groceries = groceries;
		console.log(groceries);
	  });
	  this.firebaseService.getReview().subscribe(reviews => {
			console.log(reviews+"reviews");
			this.reviews = reviews;
	  
	});
	 var user1 :any= firebase.auth().currentUser;
	if (user1 != null) {
	  this.email = user1.email;	  
	} 
	
  }
   
  addToCart(companytoCart, emailtoCart, pricetoCart,brandtoCart , grocerytoCart ){
	  this.quantity = this.myFunction();
	  console.log(this.quantity + " before cart");
	  let cart = {
		company : companytoCart,
		user : emailtoCart,
		price : pricetoCart,
		brand: brandtoCart,
		grocery: grocerytoCart,
		quantity:this.quantity
	  }
	  console.log(this.quantity + " after cart");
	  this.firebaseService.addCart(cart);
	  this.flashMessage.show(grocerytoCart+"-"+brandtoCart+"-"+companytoCart+" added to cart!",{cssClass :'alert-success',timeout:2000});
	  //alert(grocerytoCart+"-"+brandtoCart+"-"+companytoCart+" added to cart!");
	  
  }
   addCustom(companytoCustom, emailtoCustom,brandtoCustom , grocerytoCustom ){
	  this.quantity = this.myFunction();
	  console.log(this.quantity + " before Custom cart");
	  let customcart = {
		company : companytoCustom,
		user : emailtoCustom,
		brand: brandtoCustom,
		grocery: grocerytoCustom,
		quantity:this.quantity
	  }
	  console.log(this.quantity + " after Custom cart");
	  this.firebaseService.addCustomCart(customcart);
	  this.flashMessage.show(grocerytoCustom+"-"+brandtoCustom+"-"+companytoCustom+" added to your List!",{cssClass :'alert-success',timeout:2000});
	  //alert(grocerytoCart+"-"+brandtoCart+"-"+companytoCart+" added to cart!");
	  
  } 
  
  myFunction() {
    var txt;
    var ip = prompt("Please enter quantity:");
    if (ip == null || ip == "") {
        alert("User cancelled the prompt.");
    } else {
        return ip;
    }   
}
  onAddReview(){
	  let review = {
	  user : this.email.toLowerCase(),
	  grocery : this.id.toLowerCase(),
	  company : this.company.toLowerCase(),
	  review : this.review.toLowerCase() 
	  }
	  this.firebaseService.addReview(review);
	  this.router.navigate(['/grocery/'+this.id]);
  }
}