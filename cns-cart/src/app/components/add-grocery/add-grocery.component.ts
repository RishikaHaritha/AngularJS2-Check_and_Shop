import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import { Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-add-grocery',
  templateUrl: './add-grocery.component.html',
  styleUrls: ['./add-grocery.component.css']
})
export class AddGroceryComponent implements OnInit {
  id : any;	
  price : any;
  grocery : any;
  company : any;
  brand : any;
  constructor(private firebaseService : FirebaseService,private router : Router, private route : ActivatedRoute) { }

  ngOnInit() {
	this.id = this.route.snapshot.params['id'];  
  }
  onAddSubmit(){
	  let grocery = {
	  company : this.id.toLowerCase(),
	  grocery : this.grocery.toLowerCase(),
	  price : this.price.toLowerCase(),
	  brand : this.brand.toLowerCase() 
	  }
	  this.firebaseService.addGrocery(grocery);
	  this.router.navigate(['/groceries']);
  }
}