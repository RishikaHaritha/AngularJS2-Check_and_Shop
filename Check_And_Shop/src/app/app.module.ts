import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import {FirebaseService} from './services/firebase.service';
import { FlashMessagesModule} from 'angular2-flash-messages'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GroceriesComponent } from './components/groceries/groceries.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { GroceryComponent } from './components/grocery/grocery.component';
import { AddGroceryComponent } from './components/add-grocery/add-grocery.component';
import { EditGroceryComponent } from './components/edit-grocery/edit-grocery.component';
import { FilterPipe } from './filter.pipe';
import { UniquePipe } from './unique.pipe';
import { AddCartComponent } from './components/add-cart/add-cart.component';
import { CustomCartComponent } from './components/custom-cart/custom-cart.component';


const appRoutes : Routes = [
	{path :'' , component : HomeComponent},
	{path : 'groceries' , component : GroceriesComponent},
	{path : 'add-grocery/:id' , component : AddGroceryComponent},
	{path : 'grocery/:id' , component : GroceryComponent},
	{path : 'add-cart/:id' , component : AddCartComponent},
	{path : 'custom-cart/:id' , component : CustomCartComponent},
	{path : 'update-grocery/:id' , component : EditGroceryComponent}
	
]
export const firebaseConfig = {
    apiKey: "AIzaSyB7NQpUZ-GH8A75p2VMmp703-SudPs6Di8",
    authDomain: "checkandshop-36eb9.firebaseapp.com",
    databaseURL: "https://checkandshop-36eb9.firebaseio.com",
    projectId: "checkandshop-36eb9",
    storageBucket: "checkandshop-36eb9.appspot.com",
    messagingSenderId: "212276043026" 
};

const firebaseAuthConfig = {
	provider :  AuthProviders.Google,
	method : AuthMethods.Popup
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GroceriesComponent,
    NavbarComponent,
    GroceryComponent,
    AddGroceryComponent,
    EditGroceryComponent,
    NavbarComponent,
    FilterPipe,
    UniquePipe,
    AddCartComponent,
    CustomCartComponent,
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	RouterModule.forRoot(appRoutes),
	AngularFireModule.initializeApp(firebaseConfig,firebaseAuthConfig),
	FlashMessagesModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }