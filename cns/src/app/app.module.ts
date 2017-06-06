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
import { UsersPipe } from './users.pipe';
import { AddCartComponent } from './components/add-cart/add-cart.component';



const appRoutes : Routes = [
	{path :'' , component : HomeComponent},
	{path : 'groceries' , component : GroceriesComponent},
	{path : 'add-grocery/:id' , component : AddGroceryComponent},
	{path : 'add-cart/:id' , component : AddCartComponent},
	{path : 'grocery/:id' , component : GroceryComponent},
	{path : 'update-grocery/:id/:id2' , component : EditGroceryComponent}
	
]
export const firebaseConfig = {
    apiKey: "AIzaSyA2bMw4YfnozhU9cbzzIwxaIzBGbI6Wpk0",
    authDomain: "myproject-1abb2.firebaseapp.com",
    databaseURL: "https://myproject-1abb2.firebaseio.com",
    projectId: "myproject-1abb2",
    storageBucket: "myproject-1abb2.appspot.com",
    messagingSenderId: "757198016846" 
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
    UsersPipe,
    AddCartComponent
 
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