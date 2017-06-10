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
   price;
   constructor(private firebaseService : FirebaseService , 
				private router : Router , 
				private route : ActivatedRoute) { }
   //ngOnInit executes first on page load
   ngOnInit() {
	  this.id = this.route.snapshot.params['id'];//to get id passed to this page
	  //to get all grocery details
	  this.firebaseService.getGroceryDetails(this.id).subscribe(grocery => {
		this.price = grocery.price;
		/*console.log("Hello"+this.price);*/
	  });
  }
  
	//to edit grocery price
	onEditSubmit(){
		let grocery = {
			price : this.price
		}
	this.firebaseService.updateGrocery(this.id,grocery);
	this.router.navigate(['/groceries']);
	}

}