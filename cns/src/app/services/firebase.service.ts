import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable ,FirebaseObjectObservable} from 'angularfire2';

@Injectable()
export class FirebaseService {
	groceries:FirebaseListObservable<any[]>;
	emails:FirebaseListObservable<any[]>;
	reviews:FirebaseListObservable<any[]>;
	carts:FirebaseListObservable<any[]>;
	grocery:FirebaseObjectObservable<any>;
	review:FirebaseObjectObservable<any>;
	cart:FirebaseObjectObservable<any>;
	//test : FirebaseObjectObservable<any>;
    //ref : any;
	
  constructor(private af : AngularFire) {
	this.groceries = this.af.database.list('/Groceries/') as FirebaseListObservable<Grocery[]> 
	 }
  
  getEmail(){
	  this.emails = this.af.database.list('/companyUsers/') as FirebaseListObservable<Email[]>	
	  return this.emails;
  }
  getReview(){
	  this.reviews = this.af.database.list('/Reviews') as FirebaseListObservable<Review[]>	
	  return this.reviews;
  }
  getCart(){
	  this.carts = this.af.database.list('/cart/') as FirebaseListObservable<Cart[]>	
	  return this.carts;
  }
  getGroceries(){	  
	  return this.groceries;
  }
  getGroceryDetails(id){
	this.grocery = this.af.database.object('/'+id) as FirebaseObjectObservable<Grocery>
	//this.test = this.af.database.child('/Groceries') as FirebaseObjectObservable<Grocery>
	console.log("service this : "+this.grocery);
		
	return this.grocery;
  }
  addGrocery(grocery){
	return this.groceries.push(grocery);
  }
  addReview(review){
	this.reviews = this.af.database.list('/Reviews/') as FirebaseListObservable<Review[]>  
	return this.reviews.push(review);
  }
  addCart(cart){
	  this.carts = this.af.database.list('/cart/') as FirebaseListObservable<Cart[]>	
	  return this.carts.push(cart);
  }
  updateGrocery(id,grocery){
	  return this.groceries.update(id,grocery);
  }
  deleteCartItem($key){
	this.carts = this.af.database.list('/cart/') as FirebaseListObservable<Cart[]>  
	return this.carts.remove($key);
  }
}
  

interface Grocery{

	$key?: any;
	$price?:any;
	$brand?:any;
	$company?:any;
	$grocery?:any;
	
}
interface Email{
	$key?: any;	
	$company?:any;
	$email?:any;
	
}
interface Review{
	$key?: any;	
	$company?:any;
	$review?:any;
	$grocery?:any;
}

interface Cart{
	$key?: any;
	$price?:any;
	$brand?:any;
	$company?:any;
	$grocery?:any;
	$quantity?:any;
	$user?:any;	
}