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
  constructor(private firebaseService : FirebaseService , private router : Router , private route : ActivatedRoute,public flashMessage : FlashMessagesService) { 
   this.deletea = false;
   this.sum = 0;
    }

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
		makeZero(){
			this.sum = 0;
			
		}
	/* forSum(quantity,price){
		this.priceList.push(price);
		this.quantityList.push(quantity);
		console.log(this.priceList+" pricelist");
		console.log(this.quantityList+" quantitylist");
		this.lenn = this.priceList.length;
		for (var i = 0; i <= this.lenn;i++){
			console.log(this.quantityList[this.lenn]+" 1quantitylist");
			console.log(this.priceList[this.lenn]+" 1pricelist");
			this.tprice = this.quantityList[this.lenn]*this.priceList[this.lenn];
			this.sum = this.sum + this.tprice;
			console.log(this.sum+" tprice");
			
		}
	} */
	onDelete($key){
		this.firebaseService.deleteCartItem($key);
		console.log($key+" in on del");
	}
	onAllDelete($key){
		this.firebaseService.deleteCartItem($key);
		console.log($key+" in on del");
	}
	
	enableDelete(email){
		this.myList.push(email);
		//console.log(this.myList+" list");
		
	}
	deleteAll(){		
		this.len = this.myList.length;
		while (this.len >= 0){
			this.onAllDelete(this.myList[this.len]);
			this.len = this.len - 1;
		}
		this.flashMessage.show("Your order is placed !",{cssClass :'alert-success',timeout:3000});
		this.router.navigate(['/groceries']);
	}
}