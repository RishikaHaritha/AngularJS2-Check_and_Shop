import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../../services/firebase.service';
import { Router,ActivatedRoute,Params} from '@angular/router';

@Component({
  selector: 'app-edit-grocery',
  templateUrl: './edit-grocery.component.html',
  styleUrls: ['./edit-grocery.component.css']
})
export class EditGroceryComponent implements OnInit {
   id : any ;
   id2 : any ;
   price : any;
  constructor(private firebaseService : FirebaseService , private router : Router , private route : ActivatedRoute) { }

  ngOnInit() {
	  this.id = this.route.snapshot.params['id'];
	  this.id2 = this.route.snapshot.params['id2'];
	  this.firebaseService.getGroceryDetails(this.id).subscribe(grocery => {
		this.price = grocery.price;
		console.log("Hello"+grocery);
	  });
  }
  onEditSubmit(){
  let grocery = {
	price : this.price
  }
	this.firebaseService.updateGrocery(this.id,grocery);
	this.router.navigate(['/groceries']);
  }

}