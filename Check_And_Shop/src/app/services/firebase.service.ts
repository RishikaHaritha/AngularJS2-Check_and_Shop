import { Injectable } from '@angular/core';
import {AngularFire, FirebaseListObservable ,FirebaseObjectObservable} from 'angularfire2';

@Injectable()
export class FirebaseService {
	groceries:FirebaseListObservable<any[]>;
	emails:FirebaseListObservable<any[]>;
	reviews:FirebaseListObservable<any[]>;
	carts:FirebaseListObservable<any[]>;
	orders:FirebaseListObservable<any[]>;
	customcarts:FirebaseListObservable<any[]>;
	grocery:FirebaseObjectObservable<any>;
	review:FirebaseObjectObservable<any>;
	cart:FirebaseObjectObservable<any>;
	order:FirebaseObjectObservable<any>;
	customcart:FirebaseObjectObservable<any>;
	
	constructor(private af : AngularFire) {
		this.groceries = this.af.database.list('/Groceries/') as FirebaseListObservable<Grocery[]> 
	}
	//to get the emails of company users
	getEmail(){
		this.emails = this.af.database.list('/companyUsers/') as FirebaseListObservable<Email[]>	
		return this.emails;
	}
	//to get all the reviews
	getReview(){
	  this.reviews = this.af.database.list('/Reviews') as FirebaseListObservable<Review[]>	
	  return this.reviews;
	}
	//to get all the items which are placed in cart by all the users
	getCart(){
		this.carts = this.af.database.list('/cart/') as FirebaseListObservable<Cart[]>	
		return this.carts;
	}
	//to get list of all the groceries
	getGroceries(){	  
		return this.groceries;
	}
	//getting the details of a specified grocery	  	  
	getGroceryDetails(id){
		this.grocery = this.af.database.object('/Groceries/'+id) as FirebaseObjectObservable<Grocery>
		//console.log("service this : "+this.grocery);
		return this.grocery;
	}
	//getting the wishlist of all the users
	getcustomcart(){
		this.customcarts = this.af.database.list('/CustomCart/') as FirebaseListObservable<customCart[]>	
		return this.customcarts;
	}
	//to add a specific grocery
	addGrocery(grocery){
		return this.groceries.push(grocery);
	}
	//add a specific review
	addReview(review){
		this.reviews = this.af.database.list('/Reviews/') as FirebaseListObservable<Review[]>  
		return this.reviews.push(review);
	}
	//add a grocery to the user's wishlist
	addCustomCart(customcart){
		this.customcarts = this.af.database.list('/CustomCart/') as FirebaseListObservable<customCart[]>  
		return this.customcarts.push(customcart);
	}
	//add a grocery to cart
	addCart(cart){
		this.carts = this.af.database.list('/cart/') as FirebaseListObservable<Cart[]>	
		return this.carts.push(cart);
	}
	//update a specific grocery
	updateGrocery(id,grocery){
		return this.groceries.update(id,grocery);
	}
	//update the quantity in customcart
	updatequantity(id,cart){
		this.customcarts = this.af.database.list('/CustomCart/') as FirebaseListObservable<customCart[]>
		return this.customcarts.update(id,cart);
	}
	//remove an item in cart
	deleteCartItem($key){
		this.carts = this.af.database.list('/cart/') as FirebaseListObservable<Cart[]>  
		return this.carts.remove($key);
	}
	//remove a grocery from list	  
	deleteGrocery($key){
		this.groceries = this.af.database.list('/Groceries/') as FirebaseListObservable<Grocery[]>  
		return this.groceries.remove($key);
	}
	//delete an grocery from customcart
	deleteCustom($key){
		this.customcarts = this.af.database.list('/CustomCart/') as FirebaseListObservable<customCart[]>  
		return this.customcarts.remove($key);
	}
}
  
//all the interfaces to nodes of the firebase data
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
	$brand?:any;	
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
interface customCart{
	$key?: any;
	$brand?:any;
	$company?:any;
	$grocery?:any;
	$quantity?:any;
	$user?:any;	
	$price?:any;
}
interface Order{
	$key?: any;
	$price?:any;
	$brand?:any;
	$company?:any;
	$grocery?:any;
	$quantity?:any;
	$user?:any;	
}