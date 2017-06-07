import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import { Router,ActivatedRoute,Params} from '@angular/router';
import * as firebase from 'firebase';

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
  sum : any =0;
  price : any = 0;
  emptycart : any = 0;
  deletea :any = 0;
  constructor(private firebaseService : FirebaseService , private router : Router , private route : ActivatedRoute) { }

  ngOnInit() {
	  this.email = this.route.snapshot.params['id'];
	  this.firebaseService.getCart().subscribe(carts => {
	  this.carts = carts;
	  console.log(carts+" carts");
	  });
	   
  }
    totalBill(quantity,price){
			this.tprice = quantity*price;
			this.sum = this.sum + this.tprice;
			console.log(this.sum+" sum");
						
		}
	emptyCartCheck(){
		this.emptycart = 1;
		console.log(this.emptycart +"in empty cart")
		
	}		
	onDelete($key){
		this.firebaseService.deleteCartItem($key);
		console.log($key+" in on del");
		
	}
	refresh(){
		this.firebaseService.getCart().subscribe(carts => {
	  this.carts = carts;
	  console.log(carts+" carts");
	  });
	}
	enableDelete(){
		this.deletea = 1;
		console.log(this.deletea+" in enable del");
		
	}
}
